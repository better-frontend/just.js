"use strict";
"hide implementation";

import JustSelection from "./dom/JustSelection.js";
import JustHTTP from "./http/JustHTTP.js";

export default class Just {
	_privates = {
		_plugins: new Map(),
		renderer (string) {
			let element;
			if (!string.startsWith("<")) {
				element = element.createElement(string);
			} else {
				const div = element.createElement("div");
				div.innerHTML = string;
				element = div.children;
				div.remove();
			}
			return element;
		},
		requester: new JustHTTP(this)
	}

	custom (...args) { return this.custom(...args); }
	plugin (lambda, name) {
		if (name === undefined)
			name = lambda.name;
		this._privates._plugins.set(name, lambda);
		return this;
	}

	set (key, value) {
		Object.defineProperty(this._privates, key, {
			value,
			configurable: true,
			enumerable: false
		});
		return this;
	}

	select (selector) {
		if (selector instanceof Node)
			return new JustSelection([selector], {
				justInstance: this,
				parent: this
			});
		else if (typeof selector === "string")
			return new JustSelection(document.querySelectorAll(selector), {
				justInstance: this,
				parent: this
			});
		else if (selector[Symbol.iterator])
			return new JustSelection(selector, {
				justInstance: this,
				parent: this
			});
	}

	render (string) {
		return new JustSelection(this, this._privates.renderer(string));
	}

	get http () {
		return this._privates.requester;
	}
}