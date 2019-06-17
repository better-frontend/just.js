"use strict";
"hide implementation";

import FetchOptions from "./FetchOptions.js";
import justFetch from "./justFetch.js"

export default class JustHTTPPost {
	constructor (justInstance, url, options) {
		this.justInstance = justInstance;
		this.url = url;
		this.options = new FetchOptions();
		Object.assign(this.options, options);
	}

	async json (json) {
		Object.assign(this.options.headers, {
			"Content-Type": "application/json"
		});

		const body = (typeof json === "string")
			? json
			: JSON.stringify(json);

		this.options.body = body;

		const res = await justFetch(this.url, this.options);
		const contentType = res.headers.get("content-type") || "";
		if (contentType.match(/json/))
			return res.json();
		else if (contentType.match(/xml|html/))
			return this.justInstance.select((new DOMParser).parseFromString(await res.text()));
		else if (contentType.match(/plain/))
			return res.text();

		//Didn't match any known content types, just give back res.
		return res;
	}
}