import FetchOptions from "./FetchOptions.js";

export default class JustHTTPPost {
	constructor (justInstance, url, options) {
		this.justInstance = justInstance;
		this.url = url;
		this.options = new FetchOptions();
		Object.assign(this.options, options);
	}

	static async fetch (url, options) {
		const response = await fetch(url, options);

		if (!response.ok)
			throw response;

		return response;
	}

	async json (json) {
		Object.assign(this.options.headers, {
			"Content-Type": "application/json"
		});

		const body = (typeof json === "string")
			? json
			: JSON.stringify(json);

		this.options.body = body;

		const res = await JustHTTPPost.fetch(this.url, this.options);
		return res;
	}
}