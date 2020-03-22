"use strict";

import { ensureArray } from "../util.js";

export default class JustData {

	#selection;
	#dataset = [];

	#update = function () {
		this.#dataset = this.#selection.asArray.map(element => element.dataset);
	}

	constructor (selection) {
		this.#selection = selection;
		this.#dataset = selection.asArray.map(element => element.dataset);
	}

	*[Symbol.iterator] () {
		for (const datapoint of this.#dataset)
			yield datapoint;
	}

	get length () {
		return this.#dataset.length;
	}

	back () {
		return this.#selection;
	}

	get (name) {
		return this.#dataset.filter(datapoint => datapoint === name);
	}

	set (name, value) {
		this.#selection.each(element => element.setAttribute(`data-${name}`, (typeof value === "function") ? value(element) : value));
		this.#update();
		return this;
	}

	remove (name) {
		this.#selection.each(element => element.removeAttribute(`data-${name}`));
		this.#update();
		return this;
	}

	filter (fun) {
		this.#dataset = this.#dataset.filter(fun);
		return this;
	}

	each (fun) {
		for (const datapoint of this)
			fun(datapoint);
		return this;
	}

	map (fun) {
		this.#dataset = this.#dataset.map(fun);
		return this;
	}

}