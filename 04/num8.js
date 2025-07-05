// Use switch-case to print day of week from number (1 to 7).


let dayNumber = 9;

switch (dayNumber) {
  case 1: console.log("Sunday");
    break;
  case 2: console.log("Monday");
    break;
  case 3: console.log("Tuesday");
    break;
  case 4: console.log("Wednesday");
    break;
  case 5: console.log("Thursday");
    break;
  case 6: console.log("Friday");
    break;
  case 7: console.log("Saturday");
    break;
  default: console.log("Invalid input!");
}


/* Agr hum break use na kare toh maanlo agr dayNumber 2 daale toh output me,
  2 se 7 tk pura output aa jayega. But humlog break use kar rhe h isliye,
      bas 2 me jo h wahi aa rha h.  */

    /* Switch - case kyu use karte h ----------------------

    . Multiple Conditions Ko Handle Karne ke Liye.
    . code zyada readable aur structured hota hai.
    . Better for Menu or Choice-Based Programs.   */
