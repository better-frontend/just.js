"use strict";
"hide implementation";

export default class JustClass {
	constructor (justInstance) {
		this.justInstance = justInstance
	}

	back () { return this.exit(); }
	exit () {
		return this.justInstance;
	}

	add (name) {
		this.elements.each(element => element.classList.add(name));
		return this;
	}

	delete (...args) { return this.remove(...args); }
	remove (name) {
		this.elements.each(element => element.classList.remove(name));
		return this;
	}

	toggle (name) {
		this.elements.each(element => element.classList.toggle(name));
		return this;
	}

	item (index) {
		this.elements.each(element => element.classList.item(index));
		return this;
	}

	contains (name) {
		return this.elements.elements.some(element => element.classList.contains(name));
	}

	replace (oldName, newName) {
		this.elements.each(element => element.classList.replace(oldName, newName));
		return this;
	}

	clear () {
		this.elements.each(element => element.removeAttribute("class"));
		return this;
	}

	all  (...args) { return this.list(...args); }
	list () {
		return this.elements.elements
			.map(element => Array.from(element.classList))
			.flat();
	}
}