"use strict";

import { ensureArray } from "./util.js";

export default class JustAttributes {

	#selection;
	#attributes = [];

	constructor (selection) {
		this.#selection = selection;
		this.#attributes = selection.asArray.map(element => ensureArray(element.attributes)).flat();
	}

	get length () {
		return this.#attributes.length;
	}

	back () {
		return this.#selection;
	}

	get (name) {
		return this.#attributes.filter(attribute => attribute.name === name);
	}

	set (name, value) {
		this.#selection.each(element => element.setAttribute(name, value));
		return this;
	}

	remove (name) {
		this.#selection.each(element => element.removeAttribute(name));
		return this;
	}

	filter (fun) {
		this.#attributes = this.#attributes.filter(fun);
		return this;
	}

	each (fun) {
		for (const attribute of this.#attributes)
			fun(attribute);
		return this;
	}

	map (fun) {
		this.#attributes = this.#attributes.map(fun);
		return this;
	}

}