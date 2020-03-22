"use strict";

import JustGetResponse from "./JustGetResponse.js";
import JustPostResponse from "./JustPostResponse.js";

const ensureHTTP = url =>
	url.replace(/^(?:[a-z]+:\/\/)?/, "http://");

export default class JustHTTP {

	static get (url, options) {
		return new JustGetResponse(ensureHTTP(url), options);
	}

	static head (url, options) {
		throw `Not implemented.`;
	}

	static post (url, options) {
		return new JustPostResponse(ensureHTTP(url), options);
	}

	static put (url, options) {
		throw `Not implemented.`;
	}

	static delete (url, options) {
		throw `Not implemented.`;
	}

	static connect (url, options) {
		throw `Not implemented.`;
	}

	static options (url, options) {
		throw `Not implemented.`;
	}

	static trace (url, options) {
		throw `Not implemented.`;
	}

	static patch (url, options) {
		throw `Not implemented.`;
	}

}