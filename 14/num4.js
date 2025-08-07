/* 4. Create and Append an Element
Question:
Create a new <p> with the text "This is a new paragraph." and add it inside a <div> with ID "container". */

const container = document.getElementById("container");

const newParagraph = document.createElement("p");
newParagraph.innerText = "This is a new paragraph.";

container.appendChild(newParagraph);
