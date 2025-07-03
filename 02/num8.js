// Create a program where let is used to store and update a counter.

let counter = 0; // Initial value

console.log("Initial counter:", counter);  // 0

// Update the counter
counter = counter + 1;
console.log("After first increment:", counter); // 1

counter = counter + 1;
console.log("After second increment:", counter); // 2

counter = counter - 1;
console.log("After decrement:", counter); // 1

// Counter ek aisa variable hota hai jo kisi value ko baar-baar badhata (ya ghatata) hai.

// | Counter hai kya ----- Ek variable jo number track karta hai |
// | Kya karta hai ---------- Value badhata ya ghatata hai |
// | Kaise use karte hain ---------counter = counter + 1 ya counter++ |
// | Real life example ----------- Game score, steps count, click count |
