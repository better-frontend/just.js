"use strict";

import JustHTTPS from "./JustHTTPS.js";
import JustDOM from "./JustDOM.js";

export default class Just {

	// TODO: Do we want to support rendering templates through Just.js?
	//	If so: do we put it in DOM or directly in Just?
	//	If not: why is this here?
	static render (template) {
		// TODO: Implement
		throw `Not implemented.`;
	}

	static dom = JustDOM;

	// TODO: Decide wether we only support HTTPS, or support HTTP too,
	//	and if so: do we copy HTTPS or do we allow all other protocols?
	//	Other protocols will probably each require a different class.
	static https = JustHTTPS;

}