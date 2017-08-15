# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

The text is hidden again because the DOM javascript function persistence is with each page load.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Once removed, the link no longer works. The purpose of this code is to signal the DOM to run the rest of the code once the page loads.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

addEventListener is a method that allows you to place a conditional upon a certain node which will then trigger another method or action of some sort.
