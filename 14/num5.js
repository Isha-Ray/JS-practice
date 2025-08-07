/* 5. Access Parent and Change Background
Question:
Select an element with the ID "child-box" and change its parent element’s background to "lightgray". */

const child = document.getElementById("child-box");
const parent = child.parentElement;
parent.style.backgroundColor = "lightgray";
