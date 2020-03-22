"use strict";

import { throwIfNotOk } from "../util.js";

const wrapFetch = (url, data, options) =>
	fetch(url, Object.assign(options, { method: "POST", data }))
		.then(throwIfNotOk);

export default class JustPostResponse {

	#url;
	#options;

	constructor (url, options = {}) {
		this.#url = url;
		this.#options = options;
	}

	arrayBuffer (data) {
		throw `Not implemented.`;
	}

	blob (data) {
		return wrapFetch(
			this.#url,
			data,
			Object.assign(
				this.#options,
				{ "Content-Type": data.type }));
	}

	formData (data) {
		return wrapFetch(
			this.#url,
			data,
			Object.assign(
				this.#options,
				{ "Content-Type": "mutlipart/form-data" }));
	}

	json (data) {
		if (typeof data !== "string")
			data = JSON.stringify(data);
		return wrapFetch(
			this.#url,
			data,
			Object.assign(
				this.#options,
				{ "Content-Type": "application/json" }));
	}

	text (data) {
		return wrapFetch(
			this.#url,
			data,
			Object.assign(
				this.#options,
				{ "Content-Type": "text/plain" }));
	}

	html (data) {
		if ("outerHTML" in data)
			data = data.outerHTML;
		return wrapFetch(
			this.#url,
			data,
			Object.assign(
				this.#options,
				{ "Content-Type": "text/html" }));
	}

	xml (data) {
		return wrapFetch(
			this.#url,
			data,
			Object.assign(
				this.#options,
				{ "Content-Type": "application/xml" }));
	}

	cancel () {
		throw `Not implemented`;
	}

}