# just.js
Want to select that element? Just select it. Want to style that element? Just style it. Want to do anything at all? Just do it with `just.js`.

## Glossary
<details>
	<summary>Expand the glossary</summary>

- [just.js](#justjs)
	- [Glossary](#glossary)
	- [Getting started](#getting-started)
	- [Docs](#docs)
		- [<code>new Just( value? ) -> just</code>](#codenew-just-value----justcode)
		- [<code>just.create ( HTMLString ) -> just</code>](#codejustcreate--htmlstring----justcode)
		- [<code>just.select ( value ) -> just</code>](#codejustselect--value----justcode)
		- [<code>just.style ( css ) / just.css ( css ) -> just</code>](#codejuststyle--css---justcss--css----justcode)
		- [<code>just.each ( fn ) / just.foreach ( fn ) / just.forEach ( fn )</code>](#codejusteach--fn---justforeach--fn---justforeach--fn-code)
		- [<code>just.on ( event, fn ) / just.listen ( event, fn ) -> just</code>](#codejuston--event-fn---justlisten--event-fn----justcode)
		- [<code>just.text ( txt ) / just.txt ( txt ) -> just</code>](#codejusttext--txt---justtxt--txt----justcode)
		- [<code>just.html ( html ) -> just</code>](#codejusthtml--html----justcode)
		- [<code>just.attr ( name, value ) / just.attribute ( name, value ) -> just</code>](#codejustattr--name-value---justattribute--name-value----justcode)
		- [<code>just.append ( target ) -> just</code>](#codejustappend--target----justcode)
	- [Q&A](#qa)
		- [Is it me, or is this just a less featured jQuery?](#is-it-me-or-is-this-just-a-less-featured-jquery)
		- [Why not use jQuery instead of this?](#why-not-use-jquery-instead-of-this)
		- [Did you just call jQuery stupid?!](#did-you-just-call-jquery-stupid)
- [License](#license)

</details>

## Getting started
It's just a es6 module, so use `import` to _import_ it:
```js
import Just from "just.js"; //Or use just.min.js
const just = new Just();
```
Then just do what you want:
```js
//Altering all divs on a page
just
  .select("div")
  .style("color: red;")
  .text("This div was just selected!");

//creating a link
```
<br/>
<br/>

---
<br/>

## Docs
To begin, just instantiate the Just class:
### <code>new Just( value? ) -> just</code>
Creates a new instance, and if you provide an element or selector (as `value`), it will call [`just.select`](#codejustselectcode) with that value internally.

### <code>just.create ( HTMLString ) -> just</code>
Just creates an element from an HTML string. Returns the current `Just`-instance.

### <code>just.select ( value ) -> just</code>
Just selects elements. Provide either a css-selector or an actual DOMElement as `value`. Returns the current `Just`-instance.

### <code>just.style ( css ) / just.css ( css ) -> just</code>
Just styles all currently selected elements. Returns the current `Just`-instance.

### <code>just.each ( fn ) / just.foreach ( fn ) / just.forEach ( fn )</code>
Just runs `fn` _for each_ currently selected element. Returns the current `Just`-instance.

### <code>just.on ( event, fn ) / just.listen ( event, fn ) -> just</code>
Just adds an event listener to all currently selected elements. Returns the current `Just`-instance.

### <code>just.text ( txt ) / just.txt ( txt ) -> just</code>
Just sets the _innerText_ of all currently selected elements to `txt`. Returns the current `Just`-instance.

### <code>just.html ( html ) -> just</code>
Just sets the _innerHTML_ of all currently selected elements to `HTML`. Returns the current `Just`-instance.

### <code>just.attr ( name, value ) / just.attribute ( name, value ) -> just</code>
Just sets the attribute `name` to `value` of all currently selected elements. Returns the current `Just`-instance.

### <code>just.append ( target ) -> just</code>
Just appends all currently selected elements to `target`. Returns the current `Just`-instance.
<br/>
<br/>
<br/>

---
<br/>

## Q&A
### Is it me, or is this just a less featured jQuery?
Yup - or jQuery is just too featured.

### Why not use jQuery instead of this?
Because jQuery does too much and is stupid.

### Did you just call jQuery stupid?!
Yeah but it was _just_ a joke :(
<br/>
<br/>
<br/>

---
<br/>

# License
Licensed under [MIT](LICENSE) by [maanlamp](https://github.com/maanlamp)