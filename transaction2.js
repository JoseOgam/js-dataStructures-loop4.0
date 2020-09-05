class Transaction {
  constructor(amount) {
    this.balance = amount;
  }
  deposit(amount) {
    return (this.balance += amount);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      return (this.balance -= amount);
    } else {
      return `insufficient funds in your account`;
    }
  }
  balance() {
    return ` Balance: ${this.balance}`;
  }
}

let account = new Transaction(1000);
account.deposit(800);
console.log(account.balance);
console.log(account.withdraw(380));
