function arrayExtractKey (array, key) {
	return array
		.map(item => item[key])
		.filter(Boolean);
}

class Just {
	constructor (element) {
		const instance = this;
		this.__ELEMENTS = [];
		this.__PROXYHANDLER = {
			get (obj, key) {
				return instance[key]
					|| instance.__ELEMENTS[key]
					|| obj[key]
					|| instance.select(arrayExtractKey(instance.__ELEMENTS, key));
			}
		};
		if (element) this.select(element);
	}

	create (html) {
		if (html.startsWith("<")) {
			const tmp = document.createElement("DIV");
			tmp.innerHTML = html;
			return this.select(tmp.firstElementChild);
		} else return this.select(document.createElement(html));
	}

	select (element) {
		if (!element) return null;
		if (typeof element === "string") this.__ELEMENTS = Array.from(document.querySelectorAll(element));
		else {
			this.__ELEMENTS.length = 0;
			this.__ELEMENTS = this.__ELEMENTS.concat(element);
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
		return this.each(element => (value === undefined)
			? element.getAttribute(name)
			: element.setAttribute(name, value));
	}

	prependTo (target) {
		target.prepend(...this.__ELEMENTS);
		return this;
	}

	prepend (element) {
		this.each(el => el.prepend(element));
		return this;
	}

	appendTo (target) {
		target.append(...this.__ELEMENTS);
		return this;
	}

	append (element) {
		this.each(el => el.append(element));
		return this;
	}
}

export default new Just();