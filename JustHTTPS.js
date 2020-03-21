"use strict";

import JustResponse from "./JustResponse.js";

const ensureHttps = url =>
	url.replace(/^(?:[a-z]+:\/\/)?/, "https://");

export default class JustHTTPS {

	static get (url, options) {
		return new JustResponse(
			fetch(
				ensureHttps(url),
				Object.assign(
					{ method: "GET" },
					options)));
	}

	static head (url, options) {
		return new JustResponse(
			fetch(
				ensureHttps(url),
				Object.assign(
					{ method: "HEAD" },
					options)));
	}

	static post (url, options) {
		return new JustResponse(
			fetch(
				ensureHttps(url),
				Object.assign(
					{ method: "POST" },
					options)));
	}

	static put (url, options) {
		return new JustResponse(
			fetch(
				ensureHttps(url),
				Object.assign(
					{ method: "PUT" },
					options)));
	}

	static delete (url, options) {
		return new JustResponse(
			fetch(
				ensureHttps(url),
				Object.assign(
					{ method: "DELETE" },
					options)));
	}

	static connect (url, options) {
		return new JustResponse(
			fetch(
				ensureHttps(url),
				Object.assign(
					{ method: "CONNECT" },
					options)));
	}

	static options (url, options) {
		return new JustResponse(
			fetch(
				ensureHttps(url),
				Object.assign(
					{ method: "OPTIONS" },
					options)));
	}

	static trace (url, options) {
		return new JustResponse(
			fetch(
				ensureHttps(url),
				Object.assign(
					{ method: "TRACE" },
					options)));
	}

	static patch (url, options) {
		return new JustResponse(
			fetch(
				ensureHttps(url),
				Object.assign(
					{ method: "PATCH" },
					options)));
	}

}