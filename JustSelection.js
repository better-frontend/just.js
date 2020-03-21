"use strict";

import { ensureArray } from "./util.js";
import JustClasses from "./JustClasses.js";
import JustStyle from "./JustStyle.js";
import JustData from "./JustData.js";
import JustAttributes from "./JustAttributes.js";

export default class JustSelection {

	#elements = [];

	constructor (elements) {
		this.#elements = ensureArray(elements);
	}

	*[Symbol.iterator] () {
		for (const element of this.#elements)
			yield element;
	}

	get classes () {
		return new JustClasses(this);
	}

	get style () {
		return new JustStyle(this);
	}

	get data () {
		return new JustData(this);
	}

	get attributes () {
		return new JustAttributes(this);
	}

	get children () {
		this.#elements = this.#elements.map(element => Array.from(element.children));
		return this;
	}

	get length () {
		return this.#elements.length;
	}

	filter (fun) {
		this.#elements = this.#elements.filter(fun);
		return this;
	}

	select () {
		throw `Not implemented.`;
	}

	each (fun) {
		for (const element of this)
			fun(element);
		return this;
	}

	map (fun) {
		this.#elements = this.#elements.map(fun);
		return this;
	}

	on (event, handler) {
		return this.each(element => element.addEventListener(event, handler));
	}

	off (event, handler) {
		return this.each(element => element.removeEventListener(event, handler));
	}

	text (text) {
		if (text === undefined) {
			this.#elements = this.#elements.map(element => element.textContent);
			return this;
		}

		const str = text.toString();
		return (text === null)
			? this.each(element => element.textContent = "")
			: this.each(element => element.textContent = str);
	}

	html (html) {
		if (html === undefined) {
			this.#elements = this.#elements.map(element => element.innerHTML);
			return this;
		}

		const str = html.toString();
		return (html === null)
			? this.each(element => element.innerHTML = "")
			: this.each(element => element.innerHTML = str);
	}

	value (value) {
		if (value === undefined) {
			this.#elements = this.#elements.map(element => element.value);
			return this;
		}

		const str = value.toString();
		return (value === null)
			? this.each(element => element.value = "")
			: this.each(element => element.value = str);
	}

	get asArray () {
		return this.#elements;
	}

}