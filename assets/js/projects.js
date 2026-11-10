/*
	Renders the Projects list from projects.json.
	The static list in index.html stays as the no-JS (and file://) fallback;
	it is only replaced once projects.json has loaded and parsed successfully.
*/
(function () {
	var list = document.querySelector('#projects .projects');
	if (!list || !window.fetch) return;

	function el(tag, text) {
		var node = document.createElement(tag);
		if (text) node.textContent = text;
		return node;
	}

	fetch('projects.json')
		.then(function (res) {
			if (!res.ok) throw new Error('HTTP ' + res.status);
			return res.json();
		})
		.then(function (projects) {
			if (!Array.isArray(projects) || !projects.length) return;
			var frag = document.createDocumentFragment();
			projects.forEach(function (p) {
				var li = el('li');
				var h3 = el('h3');
				if (p.link) {
					var a = el('a', p.name);
					a.href = p.link;
					h3.appendChild(a);
				} else {
					h3.textContent = p.name;
				}
				li.appendChild(h3);
				li.appendChild(el('p', p.description));
				if (p.tags && p.tags.length) {
					var tags = el('ul');
					tags.className = 'tags';
					p.tags.forEach(function (t) { tags.appendChild(el('li', t)); });
					li.appendChild(tags);
				}
				frag.appendChild(li);
			});
			list.replaceChildren(frag);
		})
		.catch(function () { /* keep the static fallback list */ });
})();
