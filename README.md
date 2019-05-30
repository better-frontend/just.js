# just.js
Want to select that element? Just select it. Want to style that element? Just style it. Want to do anything at all? Just do it with `just.js`.

## Glossary
<details>
	<summary>Expand the glossary</summary>

- [just.js](#justjs)
	- [Glossary](#glossary)
	- [Just Get started](#just-get-started)
	- [Docs](#docs)
		- [<code>Just.set ( string: key, any: value ) -> this</code>](#codejustset--string-key-any-value----thiscode)
		- [<code>Just.plugin ( value ) / Just.custom ( value ) -> this</code>](#codejustplugin--value---justcustom--value----thiscode)
		- [<code>Just.render ( string ) -> new JustSelection</code>](#codejustrender--string----new-justselectioncode)
		- [<code>Just.select ( string|Iterable\<HTMLElement\>: values ) -> new JustSelection</code>](#codejustselect--stringiterablehtmlelement-values----new-justselectioncode)
		- [Internal classes](#internal-classes)
- [License](#license)

</details>

## Just Get started
It's just an es6 module, so use `import` to _import_ it:
```js
import just from "just.js";
```
Then just do what you want:
```js
//Altering all divs on a page
just
  .select("div")
  .style("color: red;")
  .text("This div was just selected!");

//Creating a link
just
  .create("<a></a>")
  .text("Click here!")
  .attribute("href", "https://shadylink.com");
```
<br/>
<br/>

---
<br/>

## Docs
⚠️ _The docs describe the type before the name of an argument: `prototype.method ( type: name ) -> returnValue`_

⚠️ _Any typing in this documentation is not enforced -- it serves merely as a guideline._

### <code>Just.set ( string: key, any: value ) -> this</code>
Just sets a property on the global Just-instance. Currently, this does not pass userdata to any [internal classes](#internal-classes).

### <code>Just.plugin ( value ) / Just.custom ( value ) -> this</code>
Registers a plugin

### <code>Just.render ( string ) -> new JustSelection</code>
Just renders an element from a string. [Returns a new `JustSelection`-instance.](docs/JustSelection.md) Just uses it's own HTML renderer by default. You can specify another renderer using `Just.set("renderer", ...)`.

Shameless plug: [take a look at better-templates renderer](). It is one of the repositories in [the better-frontend series](./) which I made specifically to use with Just.js, or as a standalone CLI.

### <code>Just.select ( string|Iterable\<HTMLElement\>: values ) -> new JustSelection</code>
Just selects elements. Provide either a css-selector or an actual DOMElement as `values`. Returns a new [`JustSelection`-instance.](docs/JustSelection.md)

### Internal classes
- [JustSelection](docs/JustSelection.md)
- [JustClasses](docs/JustClasses.md)
- [JustAttributes](docs/JustAttributes.md)
- [JustDataset](docs/JustDataset.md)

<br/>
<br/>

---
<br/>

# License
Licensed under [MIT](LICENSE) by [maanlamp](https://github.com/maanlamp)