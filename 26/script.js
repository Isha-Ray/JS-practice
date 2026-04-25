const atm = function(initialBalance){
    let balance = initialBalance;
    function withdraw(amt){
        if(amt > balance){
            return "Are you kidding?";
        }else{
            balance -= amt;
            return balance;
        }
    }
    return {withdraw};
};

const isha = atm(1000);
console.log(isha.withdraw(100));
console.log(isha.withdraw(100));