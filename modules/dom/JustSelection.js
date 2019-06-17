"use strict";
"hide implementation";

import JustClasses from "./JustClasses.js";
import JustDataset from "./JustDataset.js";
import JustAttributes from "./JustAttributes.js";
import JustBackable from "../JustBackable.js";

export default class JustSelection extends JustBackable {
	constructor (elements, justInstance) {
		const superElements = (elements[Symbol.iterator] === undefined)
			? [elements]
			: Array.from(elements);
		super(justInstance._plugins, superElements);

		this.justInstance = justInstance;
	}

	[Symbol.iterator] () { return this.elements[Symbol.iterator](); }
	[Symbol.asyncIterator] () {
		return (function* () {
			for (const element of this.elements)
				yield element;
		}).call(this);
	}

	select (selector) {
		if (typeof selector !== "string" && selector[Symbol.iterator])
			return new JustSelection(selector, this);
		else
			return new JustSelection(this.elements.map(element => Array.from(element.querySelectorAll(selector))).flat(), this);
	}

	css   (...args) { return this.style(...args); }
	style (css) {
		//get/set
		console.warn("Warning: Styling of elements is not yet implemented.");
		if (css === undefined)
			return; //Return the style rules associated with this.elements

		//Set style
		return this;
	}

	each    (...args) { return this.forEach(...args); }
	foreach (...args) { return this.forEach(...args); }
	forEach (lambda) {
		for (const element of this)
			lambda(element);
		return this;
	}

	map (lambda) {
		return this.select(this.elements.map(lambda));
	}

	on     (...args) { return this.addEventListener(...args); }
	listen (...args) { return this.addEventListener(...args); }
	addEventListener (event, handler) {
		//get?/set
		return this.each(element => element.addEventListener(event, handler));
	}

	txt         (...args) { return this.textContent(...args); }
	text        (...args) { return this.textContent(...args); }
	innerText   (...args) { return this.textContent(...args); }
	textContent (text) {
		//get/set
		if (text === undefined)
		return this.map(element => element.textContent); //Return the style rules associated with this.elements
		return this.each(element => element.textContent = text);
	}

	html      (...args) { return this.innerHTML(...args); }
	innerHtml (...args) { return this.innerHTML(...args); }
	innerHTML (html) {
		//get/set
		if (html === undefined)
			return this.map(element => element.innerHTML); //Return the style rules associated with this.elements
		return this.each(element => element.innerHTML = html);
	}

	attr      (...args) { return this.attribute(...args); }
	attribute (name, value = undefined) {
		//get/set
		if (value === undefined)
			return this.attributes.get(name);
		else
			return this.attributes.set(name, value);
	}
	get attributes () {
		return new JustAttributes(this);
	}

	get class     () { return this.classList; }
	get classes   () { return this.classList; }
	get classlist () { return this.classList; }
	get classList () {
		return new JustClasses(this);
	}

	get data    () { return this.dataSet; }
	get dataset () { return this.dataSet; }
	get dataSet () {
		return new JustDataset(this);
	}

	append (...elements) {
		if (elements.length === 1 && typeof elements[0] === "string")
			return this.map(element => element.append(justInstance.render(element)));
		else
			return this.map(element => element.append(...elements)); //This probably doesnt work, since they won't be copied/cloned.
	}

	appendTo (target) {
		target.append(...this.elements);
	}

	prepend (...elements) {
		if (elements.length === 1 && typeof elements[0] === "string")
			return this.map(element => element.prepend(justInstance.render(element)));
		else
			return this.map(element => element.prepend(...elements)); //This probably doesnt work, since they won't be copied/cloned.
	}

	prependTo (target) {
		target.prepend(...this.elements);
	}

	copy  (...args) { return this.clone(...args); }
	clone (deep = true) {
		return this.select(this.map(element => element.cloneNode(deep)));
	}

	detach () {
		return this.each(element => element.remove());
	}

	delete (...args) { return this.remove(...args); }
	remove () {
		this.each(element => element.remove());
		this.elements = [];
		return this;
	}

	//Singular methods
	//	Made to work with the JustSelection, but should only be called on one element.
	//	Using it for multiple elements may cause unexpected things.
	click () {
		return this.each(element => element.click());
	}

	blur () {
		return this.each(element => element.blur());
	}

	focus () {
		return this.each(element => element.focus());
	}

	//Singular properties
	//	Made to work with the JustSelection, but should only be called on one element.
	//	Using it for multiple elements may cause unexpected things.
	get value () {
		return this.elements[0].value;
	}

	get contenteditable () { return this.contentEditable; }
	get contentEditable () {
		return this.elements[0].contentEditable;
	}

	get hidden () {
		return this.elements[0].hidden;
	}

	get visible () {
		//Prevent switching undefined to true
		return (Boolean(this.hidden) === this.hidden)
			? !this.hidden
			: this.hidden;
	}

	get offset () {
		const element = this.elements[0];
		return {
			height: element.offsetHeight,
			left: element.offsetLeft,
			top: element.offsetTop,
			width: element.offsetWidth,
			parent: element.offsetParent,
		};
	}

	get offsetHeight () {
		return this.elements.offsetHeight[0];
	}

	get offsetLeft () {
		return this.elements.offsetLeft[0];
	}

	get offsetTop () {
		return this.elements.offsetTop[0];
	}

	get offsetWidth () {
		return this.elements.offsetWidth[0];
	}

	get offsetParent () {
		return this.elements.offsetParent[0];
	}
}