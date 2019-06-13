import FetchOptions from "./FetchOptions.js";
import justFetch from "./justFetch.js";

export default class JustHTTPGet {
	constructor (justInstance, url, options) {
		this.justInstance = justInstance;
		this.url = url;
		this.options = new FetchOptions();
		Object.assign(this.options, options);
	}

	async json () {
		Object.assign(this.options.headers, {
			"Accept": "application/json"
		});

		const res = await justFetch(this.url, this.options);
		return res.json();
	}

	async html () {
		Object.assign(this.options.headers, {
			"Accept": "text/html"
		});

		const res = await justFetch(this.url, this.options);
		const text = await res.text();
		return this.justInstance.select(new DOMParser().parseFromString(text, "text/html"));
	}

	arraybuffer (...args) { return this.arrayBuffer(...args); }
	async arrayBuffer () {
		const res = await justFetch(this.url, this.options);
		return res.arrayBuffer();
	}


	async blob () {
		const res = await justFetch(this.url, this.options);
		return res.blob();
	}

	formdata (...args) { return this.formData(...args); }
	async formData () {
		const res = await justFetch(this.url, this.options);
		return res.formData();
	}


	txt (...args) { return this.text(...args); }
	async text () {
		const res = await justFetch(this.url, this.options);
		return res.text();
	}
}