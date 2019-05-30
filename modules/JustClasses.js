"use strict";
"hide implementation";

export default class JustClass {
	constructor (selection) {
		this.selection = selection;
	}

	add (name) {
		this.selection.each(element => element.classList.add(name));
		return this;
	}

	remove (name) {
		this.selection.each(element => element.classList.remove(name));
		return this;
	}

	toggle (name) {
		this.selection.each(element => element.classList.toggle(name));
		return this;
	}

	item (index) {
		this.selection.each(element => element.classList.item(index));
		return this;
	}

	contains (name) {
		return this.selection.elements.some(element => element.classList.contains(name));
	}

	replace (oldName, newName) {
		this.selection.each(element => element.classList.replace(oldName, newName));
		return this;
	}

	clear () {
		this.selection.each(element => element.removeAttribute("class"));
		return this;
	}

	all  (...args) { return this.list(...args); }
	list () {
		return this.selection.elements
			.map(element => Array.from(element.classList))
			.flat();
	}

	back (...args) { return this.exit(...args); }
	exit () {
		return this.selection;
	}
}