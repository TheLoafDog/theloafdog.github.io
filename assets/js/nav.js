/*
	Highlights the nav link for the section currently in view.
	Without JS the links still work (plain anchors + CSS smooth scrolling).
*/
(function () {
	var links = document.querySelectorAll('#site-nav a[href^="#"]');
	if (!links.length || !('IntersectionObserver' in window)) return;

	var byId = {};
	var sections = [];
	Array.prototype.forEach.call(links, function (link) {
		var section = document.getElementById(link.getAttribute('href').slice(1));
		if (section) {
			byId[section.id] = link;
			sections.push(section);
		}
	});

	function setActive(id) {
		Array.prototype.forEach.call(links, function (link) {
			var on = byId[id] === link;
			link.classList.toggle('is-active', on);
			if (on) link.setAttribute('aria-current', 'location');
			else link.removeAttribute('aria-current');
		});
	}

	// A section counts as "current" once it crosses a line 40% down the viewport.
	var observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) setActive(entry.target.id);
		});
	}, { rootMargin: '-40% 0px -59% 0px' });

	sections.forEach(function (section) { observer.observe(section); });
})();
