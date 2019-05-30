"use strict";
"hide implementation";

import JustSelection from "./JustSelection.js";

export default class Just {
	_privates = {
		_plugins: new Map(),
		renderer (string) {
			let creation;
			if (!string.startsWith("<")) {
				creation = document.createElement(string);
			} else {
				const div = document.createElement("div");
				div.innerHTML = string;
				creation = div.children;
				div.remove();
			}
			return creation;
		}
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
		if (typeof selector !== "string" && selector[Symbol.iterator])
			return new JustSelection(selector, {
				justInstance: this,
				parent: this
			})
		else
			return new JustSelection(document.querySelectorAll(selector), {
				justInstance: this,
				parent: this
			});
	}

	render (string) {
		return new JustSelection(this, this._privates.renderer(string));
	}
}