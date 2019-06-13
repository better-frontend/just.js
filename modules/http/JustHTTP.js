import justHTTPGet from "./JustHTTPGet.js";
import JustHTTPPost from "./JustHTTPPost.js";

export default class JustHTTP {
	constructor (justInstance) {
		this.justInstance = justInstance;
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