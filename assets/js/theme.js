/*
	Dark/light theme toggle. Loaded in <head> so a saved choice applies before first paint.
	With no saved choice (or no JS) the CSS follows prefers-color-scheme.
	The toggle button is added by this script, so no-JS visitors never see a dead button.
*/
(function () {
	var root = document.documentElement;
	var KEY = 'theme';

	function load() {
		try { return localStorage.getItem(KEY); } catch (e) { return null; }
	}

	function save(value) {
		try { localStorage.setItem(KEY, value); } catch (e) { /* private mode etc. */ }
	}

	var saved = load();
	if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);

	function current() {
		var explicit = root.getAttribute('data-theme');
		if (explicit) return explicit;
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
	}

	function render(button) {
		var light = current() === 'light';
		var next = light ? 'dark' : 'light';
		button.className = 'icon solid ' + (light ? 'fa-moon' : 'fa-sun');
		button.setAttribute('aria-label', 'Switch to ' + next + ' mode');
		button.title = 'Switch to ' + next + ' mode';
	}

	document.addEventListener('DOMContentLoaded', function () {
		var nav = document.getElementById('site-nav');
		if (!nav) return;

		var button = document.createElement('button');
		button.type = 'button';
		button.id = 'theme-toggle';
		render(button);

		button.addEventListener('click', function () {
			var next = current() === 'light' ? 'dark' : 'light';
			root.setAttribute('data-theme', next);
			save(next);
			render(button);
		});

		// Keep the icon right if the OS theme changes while no choice is saved.
		if (window.matchMedia) {
			var mq = window.matchMedia('(prefers-color-scheme: light)');
			var onChange = function () { if (!root.getAttribute('data-theme')) render(button); };
			if (mq.addEventListener) mq.addEventListener('change', onChange);
			else if (mq.addListener) mq.addListener(onChange);
		}

		nav.appendChild(button);
	});
})();
