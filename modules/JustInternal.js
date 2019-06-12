export default class JustInternal {
	constructor (selection) {
		this.selection = selection;
	}

	back () { return this.exit(); }
	exit () {
		return this.selection;
	}
}