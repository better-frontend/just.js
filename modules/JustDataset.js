"use strict";
"hide implementation";

export default class JustData {
	constructor (selection) {
		this.selection = selection;
	}

	replace (...args) { return this.set(...args); }
	add     (...args) { return this.set(...args); }
	set     (name, value) {
		this.selection.each(element => element.dataset[name] = value);
		return this;
	}

	delete (name) { return this.remove(name); }
	remove (name) {
		this.selection.each(element => element.removeAttribute(`data-${name}`));
		return this;
	}

	get (name) {
		return this.selection.map(element => element.getAttribute(`data-${name}`));
	}

	contains (name) {
		return this.selection.elements.some(element => element.dataset[name] !== undefined);
	}

	toggle (name, value = "true") {
		if (!this.contains(name))
			return this.set(name, value);
		else
			return this.remove(name);
	}

	clear () {
		this.selection.each(element => {
			for (const key in element.dataset)
				element.removeAttribute(`data-${key}`);
		});
		return this;
	}

	all  (...args) { return this.list(...args); }
	list () {
		return this.selection.elements
			.map(element => Object.entries(element.dataset))
			.flat();
	}

	back (...args) { return this.exit(...args); }
	exit () {
		return this.selection;
	}
}