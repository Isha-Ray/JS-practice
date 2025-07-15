/* DOM in Javascript --------------------------------------------------------------

DOM stands for Document Object Model. It is a programming interface provided by browsers that allows JavaScript to interact with and
manipulate HTML and CSS of a webpage.
Through the DOM, JavaScript can read, change, add, or delete HTML elements and their content.


// MDN ----*

 */

/* alert(" ");

Ek chhota popup box dikhata hai browser mein.
Ye sirf message show karta hai, user se input nahi leta.

alert("Welcome to my website!"); // Example ----------------------------------------

*/

/* prompt(" ");

Ye ek input popup hota hai.
User se kuch type karne ke liye poochta hai.
Jo user input deta hai, woh return hota hai.

const name = prompt("What's your name?", "Isha"); // Example ---------------------------------------------

*/

/* console.log(window);

window object ko console mein print karta hai.
Browser mein sab kuch (alert, prompt, location, etc.) window object ke andar hota hai.

console.log(window); // Example --------------------------------------------

*/

/* console.log(Document);

JavaScript ka built-in Document constructor function print karta hai.
Yani woh function jo document object banata hai.

*/

/* console.log(document);
HTML page ka poora DOM structure console mein print karta hai.

Document = factory (machine) ////////////////////////////////////
document = us factory ka product (web page ka object) ///////////////////////////////////////////

*/

/* document.title = "My Page";
Web page ka title change kar deta hai.

document.title = "Hello Isha"; // Example ---------------------------------------

*/

/* console.log(document.body);

<body> element ko console mein print karta hai.
Yani HTML ka sirf body part (jisme heading, paragraph, buttons, etc. hote hain)

Output ------------------
<body>
  <h1>Hello</h1>
  <p>Welcome!</p>
</body>

*/

/* document.write("Hello!");

Directly HTML ke body mein likh deta hai.
Agar page pe kuch already hai, toh use overwrite (hata) bhi kar sakta hai.

document.write("Welcome to my site!"); // Example ------------------------------------

*/

/* const name = prompt("What's your name?"); // First line
    document.write("Hello " + name); // Second Line

Pehle line: Prompt popup aata hai, user apna naam type karta hai.

Doosri line: Us naam ko HTML page par dikhaya jaata hai aur saath me jo " " iske andar ho usko bhi saath me dikhata h.

*/

