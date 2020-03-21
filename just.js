"use strict";

import { assert } from "./util.js";
import JustSelection from "./JustSelection.js";
import JustHTTPS from "./JustHTTPS.js";

const queryChars = /[\[\*\>\+\~\.\|\#]/g;

class Just {

	static selectAll () {
		return new JustSelection(document.getElementsByTagName("*"));
	}

	static selectId (id, options) {
		assert(
			`Please provide a (valid) id, not "${id}"`,
			() => typeof id === "string" && id.startsWith("#"));

		return new JustSelection(document.getElementById(id));
	}

	static selectClass (classname, options = { all: true }) {
		assert(
			`Please provide a (valid) classname, not "${classname}"`,
			() => typeof classname === "string" && classname.startsWith("."));

		return new JustSelection(document[(options.all === true)
			? "getElementsByClassName"
			: "getElementByClassName"](classname));
	}

	static selectTag (tagname, options = { all: true }) {
		assert(
			`Please provide a (valid) tagname, not "${tagname}"`,
			() => typeof tagname === "string");

		return new JustSelection(document[(options.all === true)
			? "getElementsByTagName"
			: "getElementByTagName"](tagname))
	}
	
	static selectFunction (fun, options) {
		assert(
			`Please provide a function, not "${fun}"`,
			() => typeof fun === "function");

		return Just.selectAll().filter(fun);
	}
	
	static selectQuery (selector, options = { all: true }) {
		assert(
			`Please provide a (valid) query, not "${selector}"`,
			() => typeof selector === "string");

		return new JustSelection(document[(options.all === true)
			? "querySelectorAll"
			: "querySelector"](selector))
	}
	
	static select (by, options) {
		assert(
			`Please provide a selector (query, id, classname, tagname or a function)`,
			() => by !== undefined && by !== null);

		if (by === "*")
			return Just.selectAll();
		else if (by.startsWith("#"))
			return Just.selectId(by.slice(1), options);
		else if (by.startsWith("."))
			return Just.selectClass(by.slice(1), options);
		else if (typeof by === "string" && queryChars.test(by))
			return Just.selectQuery(by, options);
		else if (typeof by === "string")
			return Just.selectTag(by, options);
		
		else throw `Unsupported argument ${typeof by} "${by}"`;
	}

	static render (template) {
		// TODO: Implement
		throw `Not implemented.`;
	}

	static HTTPS = JustHTTPS;

}

export default Just;