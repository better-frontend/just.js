"use strict";
"hide implementation";

import JustSelection from "./dom/JustSelection.js";
import JustHTTP from "./http/JustHTTP.js";
import justRenderer from "./dom/justRenderer.js";
import JustHasPlugins from "./JustHasPlugins.js";

export default class Just extends JustHasPlugins {
	constructor () {
		super();
		this.requester = new JustHTTP(this);
		this.renderer = justRenderer;
	}

	set (key, value) {
		Object.defineProperty(this, key, {
			value,
			configurable: true,
			enumerable: false
		});
		return this;
	}

	select (selector) {
		if (selector instanceof Node)
			return new JustSelection([selector], this);
		else if (typeof selector === "string")
			return new JustSelection(document.querySelectorAll(selector), this);
		else if (selector[Symbol.iterator])
			return new JustSelection(selector, this);
	}

	render (string) {
		return new JustSelection(this, this.renderer(string));
	}

	get http () {
		return this.requester;
	}
}