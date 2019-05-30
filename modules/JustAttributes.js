"use strict";
"hide implementation";

export default class JustAttribute {
	constructor (selection) {
		this.selection = selection;
		this._memory = new Map();
	}

	replace (...args) { return this.set(...args); }
	add     (...args) { return this.set(...args); }
	set     (name, value = "true") {
		this.selection.each(element => element.setAttribute(name, value));
		return this;
	}

	delete (...args) { return this.remove(...args); }
	remove (name) {
		this.selection.each(element => element.removeAttribute(name));
		return this;
	}

	get (name) {
		return this.selection.map(element => element.getAttribute(name));
	}

	contains (name) {
		return this.selection.elements.some(element => element.getAttribute(name) !== null);
	}

	toggle (name, value = undefined) {
		if (!this.contains(name))
			return this.set(name, value);
		else
			return this.remove(name);
	}

	clear () {
		this.selection.each(element => {
			for (const attr of element.attributes)
				element.removeAttribute(attr.name);
		});
		return this;
	}

	all  () { return this.list(); }
	list () {
		// return this.selection.elements
		// 	.map(element => Object.entries(element.dataset))
		// 	.flat();
	}

	back () { return this.exit(); }
	exit () {
		return this.selection;
	}
}