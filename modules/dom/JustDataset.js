"use strict";
"hide implementation";

export default class JustData {
	constructor (justInstance) {
		this.justInstance = justInstance
	}

	back () { return this.exit(); }
	exit () {
		return this.justInstance;
	}

	replace (...args) { return this.set(...args); }
	add     (...args) { return this.set(...args); }
	set     (name, value = "true") {
		this.elements.each(element => element.dataset[name] = value);
		return this;
	}

	delete (...args) { return this.remove(...args); }
	remove (name) {
		this.elements.each(element => element.removeAttribute(`data-${name}`));
		return this;
	}

	get (name) {
		return this.elements.map(element => element.getAttribute(`data-${name}`));
	}

	contains (name) {
		return this.elements.elements.some(element => element.dataset[name] !== undefined);
	}

	toggle (name, value = "true") {
		if (!this.contains(name))
			return this.set(name, value);
		else
			return this.remove(name);
	}

	clear () {
		this.elements.each(element => {
			for (const key in element.dataset)
				element.removeAttribute(`data-${key}`);
		});
		return this;
	}

	all  (...args) { return this.list(...args); }
	list () {
		return this.elements.elements
			.map(element => Object.entries(element.dataset))
			.flat();
	}
}