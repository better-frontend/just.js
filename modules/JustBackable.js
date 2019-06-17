import JustHasPlugins from "./JustHasPlugins.js";

export default class JustBackable extends JustHasPlugins {
	constructor (plugins, selection) {
		super(plugins);
		this.elements = selection;
	}

	back () { return this.exit(); }
	exit () {
		return this.elements;
	}
}