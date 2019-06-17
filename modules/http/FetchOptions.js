"use strict";
"hide implementation";

export default class FetchOptions {
	constructor ({
		method,
		headers = {},
		body,
		mode,
		credentials,
		cache,
		redirect,
		referrer,
		referrerPolicy,
		integrity,
		keepalive,
		signal
	} = {}) {
		this.method = method;
		this.headers = headers;
		this.body = body;
		this.mode = mode;
		this.credentials = credentials;
		this.cache = cache;
		this.redirect = redirect;
		this.referrer = referrer;
		this.referrerPolicy = referrerPolicy;
		this.integrity = integrity;
		this.keepalive = keepalive;
		this.signal = signal;
	}
}