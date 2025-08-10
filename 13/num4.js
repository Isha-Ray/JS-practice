/*  Loop Through Multiple Elements
Select all <div> elements using querySelectorAll() and use forEach() to log each element’s innerText in the console. */


const divs = document.querySelectorAll("div");

// Loop through each div and log its innerText
divs.forEach(div => {
    console.log(div.innerText);
});



// This way, querySelectorAll() returns a NodeList of all <div> elements, and forEach() lets you run code on each one.