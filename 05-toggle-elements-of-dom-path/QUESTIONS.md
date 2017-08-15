# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

In this Atomic example, the contract used was .querySelectorAll as opposed to getElementsByClassName or similar contract. This function is different in that it is selecting all of the elements that are subdivisions of that greater element rather than the element itself