function Transact(amount) {
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

function deposit(amount) {
  return (this.balance += amount);
}

function withdraw(amount) {
  if (amount <= this.balance) {
    return (this.balance -= amount);
  } else {
    return `you have insufficient amount in your account`;
  }
}
function toString() {
  return `Balance: ${this.balance}`;
}
let account = new Transact(500);
account.deposit(1000);
console.log(account.toString()); //display 1500
console.log(account.withdraw(5000)); // display `you have insufficient amount in your account`
