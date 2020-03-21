"use strict";

const domParser = new DOMParser();
const makeUsable = (pomise, form) =>
	pomise.then(response => {
		if (!response.ok)
			throw response;
		
		return response[form]();
	});

export default class JustResponse {

	#request;

	constructor (request) {
		this.#request = request;
	}

	get arrayBuffer () {
		return makeUsable(this.#request, "arrayBuffer");
	}

	get blob () {
		return makeUsable(this.#request, "blob");
	}

	get formData () {
		return makeUsable(this.#request, "formData");
	}

	get json () {
		return makeUsable(this.#request, "json");
	}

	get text () {
		return makeUsable(this.#request, "text");
	}

	get html () {
		return this.text.then(html => domParser.parseFromString(html, "text/html"));
	}

}