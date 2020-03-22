# Just Javascript

## What? 🤔
Just.js is a small library for doing everyday front-end work with "just javascript". It's not really intended to be used at massive scale, such as jquery. Just.js makes development easier while keeping the cost low for users.

<br/>

## Why? ⁉️
The modern web ecosystem consists mainly of very javascript-heavy applications, even when such applications should have been simple websites without any javascript in the first place. For the people who understand what javascript _should_ be used for, this library exposes a very minimal way for developers to just get stuff done -- without burdening the user with terabytes of javascript. Just.js shows how easy and intuitive web API's can and should be.

<br/>

## Install 💿
If you want to have a look, Just download the library here from github.

<br/>

## Usage 💪
I will provide a couple of examples with both vanilla and Just javascript. Decide for yourself if it's worth it.

<details open>
<summary>Click here to view code examples</summary>

### Working with the DOM
The following examples will work on this HTML file:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="/login" method="POST">
    <img id="mascot" src="/images/mascot-eyes-open.png" alt="A funny doodle eagerly awaiting your input, he seems friendly.">
    <h1>Hello</h1>
    <input type="text" id="username">
    <input type="password" id="password">
    <button type="submit">Login</button>
  </form>
</body>
</html>
```

<br/>
<br/>

#### Selection and Manipulation
Sometimes you just want to spice up the login experience a bit. Maybe include [a mascot that covers his eyes when you type in your password](https://twitter.com/dsenneff/status/965393299614859265)? the following example shows such a situation (but way more simple, no trigonometry here 🙃).
##### Vanilla
```js
const mascot = document.getElementById("mascot");
const coverEyes = () => {
  mascot.src = "/images/mascot-eyes-closed.png";
  mascot.alt = "The doodle respects your privacy and covers his eyes while you type in your password.";
}
const uncoverEyes = () => {
  mascot.src = "/images/mascot-eyes-open.png";
  mascot.alt = "The doodle uncovers his eyes. Your secrets are safe.";
}
const password = document.getElementById("password");
password.addEventListener("focus", coverEyes);
password.addEventListener("blur", uncoverEyes);
```
##### Just.js
```js
const mascot = Just.dom.select("#mascot");
const coverEyes = () =>
  mascot.attributes
    .set("src", "/images/mascot-eyes-closed.png")
    .set("alt", "The doodle respects your privacy and covers his eyes while you type in your password.");
const uncoverEyes = () =>
  mascot.attributes
    .set("src", "/images/mascot-eyes-open.png")
    .set("alt", "The doodle uncovers his eyes. Your secrets are safe.");
Just.dom
  .select("#password")
  .on("focus", coverEyes)
  .on("blur", uncoverEyes);
```

<br/>

Furthermore, as you might have seen, Just.js implements a simple unified APi for working with HTML attributes, normal and specialised, such as `class` and `data-*`. What if you wanted to count the length of someone's name?
##### Vanilla
```js
const username = document.getElementById("username");
const saveLength = () =>
  username.dataset.length = username.value.length;
username.addEventListener("input", saveLength);
```
##### Just.js
```js
const username = Just.dom.select("#username");
const saveLength = () =>
  username.data.set("length", input => input.value.length);
username.on("input", saveLength);
```
Note how for Just.js you have to provide a function to get the current input. This is because all getters on a "JustSelection" are just a way of mapping all elements. This means that `Just.dom.select("input").value` yields an array of the `value`s of all input elements. The same applies to classes and other attributes.

<br/>

### Working with HTTP
Sometimes you just need to get some data. Maybe you want to create a custom image lazy-loading effect?

#### GET
```js
// Load really low-res image and actual image at the same time,
//  replace src with actual image blob when done, cancelling
//  lading of the small image.
```
```js
// Load really low-res image and actual image at the same time,
//  replace src with actual image blob when done, cancelling
//  lading of the small image.
```
Note that in the vanilla example we used the Fetch API, which is a nice enough API but leaves much to be desired.

#### POST
Sometimes you just need to post some data. Maybe you want to progressively enhance your website's login functionality?

```js
// Hijack form to not use method=post, then add event listener
//  to post a comment to the api and insert comment element
//  on succesful response.
```
```js
// Hijack form to not use method=post, then add event listener
//  to post a comment to the api and insert comment element
//  on succesful response.
```

</details>