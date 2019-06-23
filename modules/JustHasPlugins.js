export default class JustHasPlugins {
	constructor (justInstance = {}) {
		this._plugins = new Map(justInstance._plugins || []);

		//Delegate plugins
		for (const [name, plugin] of this._plugins)
			Object.defineProperty(this, name, { value: plugin });
	}

	custom (...args) { return this.custom(...args); }
	plugin (lambda, name) {
		if (name === undefined)
			name = lambda.name || "anonymous";
		this._plugins.set(name, lambda);
		return this;
	}
}