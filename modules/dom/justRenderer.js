export default function renderer (string) {
	let element;
	if (!string.startsWith("<")) {
		element = document.createElement(string);
	} else {
		const div = document.createElement("div");
		div.innerHTML = string;
		element = div.children;
		div.remove();
	}
	return element;
}