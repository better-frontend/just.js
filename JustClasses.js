"use strict";

import { ensureArray } from "./util.js";

export default class JustClasses {

	#selection;
	#classes = [];
	
	#update = function () {
		this.#classes = this.#selection.asArray.map(element => ensureArray(element.classList)).flat();
	}

	constructor (selection) {
		this.#selection = selection;
		this.#classes = selection.asArray.map(element => ensureArray(element.classList)).flat();
	}

	get length () {
		return this.#classes.length;
	}

	back () {
		return this.#selection;
	}

	add (...classes) {
		this.#selection.each(element => element.classList.add(...classes));
		this.#update();
		return this;
	}

	remove (...classes) {
		this.#selection.each(element => element.classList.remove(...classes));
		this.#update();
		return this;
	}

	toggle (name, force = true) {
		this.#selection.each(element => element.classList.toggle(name, force));
		this.#update();
		return this;
	}

	filter (fun) {
		this.#classes = this.#classes.filter(fun);
		return this;
	}

	each (fun) {
		for (const classname of this.#classes)
			fun(classname);
		return this;
	}

	map (fun) {
		this.#classes = this.#classes.map(fun);
		return this;
	}

}