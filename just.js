export default class Just {
	constructor (element) {
		const instance = this;
		this.__ELEMENTS = [];
		this.__PROXYHANDLER = {
			get (obj, key) {
				return instance[key] || instance.__ELEMENTS[key] || obj[key];
			}
		};
		if (element) this.select(element);
	}

	create (html) {
		const tmp = document.createElement("DIV");
		tmp.innerHTML = html;
		return this.select(tmp.firstElementChild);
	}

	select (element) {
		if (typeof element === "string") this.__ELEMENTS = Array.from(document.querySelectorAll(element));
		else {
			this.__ELEMENTS.length = 0;
			this.__ELEMENTS.push(element);
		}
		return new Proxy(this, this.__PROXYHANDLER);
	}

	css   (style) {return this.style(style);}
	style (style) {
		this.each(element => element.style = style);
		return this;
	}

	each    (fn) {return this.forEach(fn);}
	foreach (fn) {return this.forEach(fn);}
	forEach (fn) {
		this.__ELEMENTS.forEach(fn);
		return this;
	}

	on (event, fn) {return this.listen(event, fn);}
	listen (event, fn) {
		return this.each(element => element.addEventListener(event, fn));
	}

	txt  (txt) {return this.text(txt);}
	text (txt) {
		return this.each(element => element.innerText = txt);
	}

	html (html) {
		return this.each(element => element.innerHTML = html);
	}

	attr (name, value) {return this.attribute(name, value);}
	attribute (name, value) {
		return this.each(element => element.setAttribute(name, value));
	}

	append (target) {
		target.append(...this.__ELEMENTS);
		return this;
	}
}