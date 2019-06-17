"use strict";
"hide implementation";

import JustBackable from "../JustBackable.js";

export default class JustAttribute extends JustBackable {
	constructor (justInstance) {
		super(justInstance._plugins, justInstance.elements);
	}

	replace (...args) { return this.set(...args); }
	add     (...args) { return this.set(...args); }
	set     (name, value = "true") {
		this.elements.each(element => element.setAttribute(name, value));
		return this;
	}

	delete (...args) { return this.remove(...args); }
	remove (name) {
		this.elements.each(element => element.removeAttribute(name));
		return this;
	}

	get (name) {
		return this.elements.map(element => element.getAttribute(name));
	}

	contains (name) {
		return this.elements.elements.some(element => element.getAttribute(name) !== null);
	}

	toggle (name, value = undefined) {
		if (!this.contains(name))
			return this.set(name, value);
		else
			return this.remove(name);
	}

	clear () {
		this.elements.each(element => {
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
}