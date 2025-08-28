/* function add(a, b, c) {
    return a + b + c;
}

console.log(add(2, 5, 10)); */

/* function add(a){
    return function(b){
        return function(c){
            return a + b + c;
        };
    };
}
*/

const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3));


// console.log(add(2)(4)(6));


/* function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`Sending Email to ${to} with subject ${subject}: ${body}`)
        };
    };
}
*/

const sendAutoEmail = to => subject => body => `Sending Email to ${to} with subject ${subject}: ${body}`;


let step1 = sendAutoEmail("isharay009@gmail.com");
let step2 = step1("New order confirmation");

console.log(step2("Hey Isha, Here is something for you"));







