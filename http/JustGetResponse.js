"use strict";

import { throwIfNotOk } from "../util.js";

const domParser = new DOMParser();
const wrapFetch = (url, type, options) =>
	fetch(url, Object.assign(options, { method: "GET" }))
		.then(throwIfNotOk)
		.then(response => response[type]());

export default class JustGetResponse {

	#url;
	#options;

	constructor (url, options = {}) {
		this.#url = url;
		this.#options = options;
	}

	get arrayBuffer () {
		return wrapFetch(this.#url, "arrayBuffer", this.#options);
	}

	get blob () {
		return wrapFetch(this.#url, "blob", this.#options);
	}

	get formData () {
		return wrapFetch(this.#url, "formData", this.#options);
	}

	get json () {
		return wrapFetch(this.#url, "json", this.#options);
	}

	get text () {
		return wrapFetch(this.#url, "text", this.#options);
	}

	get html () {
		return this.text
			.then(html => domParser
				.parseFromString(html, "text/html"));
	}

	get xml () {
		return this.text
			.then(html => domParser
				.parseFromString(html, "application/xml"));
	}

	dsv (delimiter, options = { hasHeaders: true }) {
		// TODO: This parser is very simple and naive
		return this.text
			.then(text => {
				const entries = text
					.split("\n")
					.map(line => line.split(delimiter));
				return (options.hasHeaders)
					? entries
							.slice(1)
							.map(entry => entry
								.reduce((obj, value, i) => ({
									...obj,
									[entries[0][i]]: value
								}), {}))
					: entries;
			});
	}

	csv (options) {
		return this.dsv(",", options);
	}

	cancel () {
		throw `Not implemented`;
	}

}