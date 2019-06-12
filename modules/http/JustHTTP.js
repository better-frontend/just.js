import justHTTPGet from "./JustHTTPGet.js";

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

	//head
	//post
	//put
	//delete
	//connnect?
	//options
	//trace
	//patch
}