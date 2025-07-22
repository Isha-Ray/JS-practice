/* document.querySelector()

 It returns the first element that matches a CSS-style selector
  (like tag name, class, or id).

*/

/* Syntax ------>
document.querySelector("selector");
*/

/* Tag Name --------------------------->
document.querySelector("h1"); // selects the first <h1>
*/

/* ID Selector (prefix with #)
document.querySelector("#main"); // selects element with id="main"
*/

/* Class Selector (prefix with .)
document.querySelector(".box"); // selects the first element with class="box"
*/

// ----------------------------------------------------------------------------------------------------------


/* 1. const body = document.querySelector("body");

Yeh line HTML ka <body> tag select karti hai.
body naam ke variable mein store kar leti hai.
"querySelector" sirf pehla milne wala element select karta hai. */

/* 2. // body.innerHTML = '<h1>Hacked!!</h1>';

Yeh line <body> ke andar ka pura content hata kar sirf Hacked!! ka <h1> heading daal deti hai.
Ye Purana content delete ho jata hai. */

/* 3. // const div = document.querySelector("div");

Page ka pehla <div> tag select karega. */

/* 4. // console.log(div.innerHTML);

Us <div> ke andar kya likha hai (HTML ke saath) console mein print karega. */

/* 5. // div.innerHTML = "<h1>This is Hacked!</h1>";

<div> ke andar ka content badal kar This is Hacked! ka heading bana dega. */

/* 6. // const username = document.querySelector("#Username");

id="Username" wale element ko select karta hai. */

/* 7. // console.log(username.innerText);

Us element ke andar jo text dikh raha hai, use print karega. */

/* 8. // username.innerText = "Harry Potter";

Us element ka dikhne wala text "Harry Potter" se badal dega. */

/* 9. // const ele = document.querySelector(".paragraph");

Pehla element jiska class="paragraph" hai, use select karega. */

/* 10. // console.log(ele.innerHTML);

Us element ke andar ka pura HTML content print karega. */

/* 11. // const ele = document.querySelectorAll("div");

Page ke sabhi <div> elements ko ek list (NodeList) mein le aata hai. */

/* 12. // console.log(ele.children);

ele ek list hai. Isliye ele.children nahi chalega. Hume ele[0].children likhna chahiye. */

/* 13. // console.log(ele.parentElement.children);

ele list hai, isliye ele.parentElement nahi chalega. Pehle element ko access karna hoga: ele[0].parentElement.children. */

/* 14. // const ele = document.querySelectorAll("Block");

Block naam ka tag dhoond raha hai — lekin HTML mein aisa koi tag nahi hota.
Result: Empty list (kuch nahi milega). */

/* 15.  ele.forEach ((e) => {
        console.log(e.innerHTML);
      });

Sabhi selected elements ke andar ka content ek-ek karke print karega.
forEach har element ke liye e.innerHTML chalata hai.  */







