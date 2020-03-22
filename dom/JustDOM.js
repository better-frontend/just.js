"use strict";

import { assert, safeToString } from "../util.js";
import JustSelection from "./JustSelection.js";

const queryChars = /[\[\*\>\+\~\.\|\#]/g;

export default class JustDOM {

	static get root () {
		return new JustSelection(document.documentElement);
	}

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
	
	static selectFunction (fun, options = { all: true }) {
		assert(
			`Please provide a function, not "${fun}"`,
			() => typeof fun === "function");

		return (options.all === true)
			? JustDOM.selectAll().filter(fun)
			: new JustSelection(JustDom.selectAll().filter(fun).asArray[0]);
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
			return JustDOM.selectAll();
		else if (typeof by === "function")
			return JustDOM.selectFunction(by, options);
		else if (typeof by === "string") {
			if (by.startsWith("#"))
				return JustDOM.selectId(by.slice(1), options);
			else if (by.startsWith("."))
				return JustDOM.selectClass(by.slice(1), options);
			else if (queryChars.test(by))
				return JustDOM.selectQuery(by, options);
			else
				return JustDOM.selectTag(by, options);
		}

		else throw `Unsupported argument ${typeof by} "${safeToString(by)}"`;
	}

}