"use strict";

import { ensureArray } from "../util.js";

export default class JustAttributes {

	#selection;
	#attributes = [];

	#update = function () {
		this.#attributes = this.#selection.asArray.map(element => ensureArray(element.attributes)).flat();
	}

	constructor (selection) {
		this.#selection = selection;
		this.#attributes = selection.asArray.map(element => ensureArray(element.attributes)).flat();
	}

	*[Symbol.iterator] () {
		for (const attribute of this.#attributes)
			yield attribute;
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
		this.#selection.each(element => element.setAttribute(name, (typeof value === "function") ? value(element) : value));
		this.#update();
		return this;
	}

	remove (name) {
		this.#selection.each(element => element.removeAttribute(name));
		this.#update();
		return this;
	}

	filter (fun) {
		this.#attributes = this.#attributes.filter(fun);
		return this;
	}

	each (fun) {
		for (const attribute of this)
			fun(attribute);
		return this;
	}

	map (fun) {
		this.#attributes = this.#attributes.map(fun);
		return this;
	}

}