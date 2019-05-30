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
		- [<code>Just.plugin / Just.custom ( function: plugin, string: name? ) -> this</code>](#codejustplugin--justcustom--function-plugin-string-name----thiscode)
		- [<code>Just.render ( string: template ) -> new JustSelection</code>](#codejustrender--string-template----new-justselectioncode)
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
//Creating a weird link
just.render("a")
  .style("color: red;")
  .text("Click here!")
  .attribute("href", "https://shadylink.com")
  .on("click", event => {
    event.target.remove()});

//Creating the same link with better-templates and better-stylesheets
//https://github.com/better-frontend/better-templates
//https://github.com/better-frontend/better-stylesheets
just.render(`
  template
    a[href=https://shadylink.com] "Click here!"

  style[scoped]
    a
      colour: red;
      :hover
        colour: lighten(red, 10%);`)
  .on("click", event => {
    event.target.remove()});
```
<br/>
<br/>

---
<br/>

## Docs
⚠️ _The docs describe the type before the name of an argument: `prototype.method ( type: name ) -> returnValue`_

⚠️ _Any typing in this documentation is not enforced -- it serves merely as a guideline._

### <code>Just.set ( string: key, any: value ) -> this</code>
Just sets a property on the global Just-instance. This does not pass userdata to any [internal classes](#internal-classes) (for now).
<br/>
<br/>
<br/>

### <code>Just.plugin / Just.custom ( function: plugin, string: name? ) -> this</code>
Registers a plugin. A plugin is a function that can be called on every instance of any [internal classes](#internal-classes). Providing a name is optional, because it can be infered from a function (given that you don't provide an anonymous function and no name). When providing a named function, the `this`-value will be that of the current internal class, allowing you to call other built-in methods from it:
```js
just
  .plugin(function logEachTagName () {
    this.each(element => console.log(element.tagName));
    return this})
  .select("body")
  .logEachTagName();
//> BODY
```

Don't forget to `return this` if you want to keep your methods chainable.
<br/>
<br/>
<br/>

### <code>Just.render ( string: template ) -> new JustSelection</code>
Just renders HTML from a string. [Returns a new `JustSelection`-instance.](docs/JustSelection.md) `Just` uses it's own HTML renderer by default, but you can specify another renderer using `Just.set("renderer", ...)`.

Shameless plug: [take a look at better-templates renderer](https://github.com/better-frontend/better-templates). It is one of the repositories in [the better-frontend series](https://github.com/better-frontend) which I made specifically to use with Just.js, or as a standalone CLI.
<br/>
<br/>
<br/>

### <code>Just.select ( string|Iterable\<HTMLElement\>: values ) -> new JustSelection</code>
Just selects elements. Provide either a css-selector or an iterable containing `HTMLElement`s as _values_. Returns a new [`JustSelection`-instance.](docs/JustSelection.md)
<br/>
<br/>
<br/>

### Internal classes
- [JustSelection](docs/JustSelection.md) (0% done)
- [JustClasses](docs/JustClasses.md) (0% done)
- [JustAttributes](docs/JustAttributes.md) (0% done)
- [JustDataset](docs/JustDataset.md) (0% done)

<br/>
<br/>

---
<br/>

# License
Licensed under [MIT](LICENSE) by [maanlamp](https://github.com/maanlamp)