"use strict";
"hide implementation";

import justHTTPGet from "./JustHTTPGet.js";
import JustHTTPPost from "./JustHTTPPost.js";

export default class JustHTTP {
	constructor (justInstance) {
		this.justInstance = justInstance;

		//Delegate plugins (should probably allow separate just and http plugins)
		// for (const [name, plugin] of justInstance._privates._plugins)
		// 	Object.defineProperty(this, name, { value: plugin });
	}

	GET (...args) { return this.get(...args); }
	get (url) {
		return new justHTTPGet(this.justInstance, url, {
			method: "GET"
		});
	}

	POST (...args) { return this.post(...args); }
	post (url) {
		return new JustHTTPPost(this.justInstance, url, {
			method: "POST"
		});
	}

	//head
	//post
	//put
	//delete
	//connnect?
	//options
	//trace
	//patch
}