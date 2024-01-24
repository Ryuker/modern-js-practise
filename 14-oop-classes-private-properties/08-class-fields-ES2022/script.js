// ES022 Private Class Fields
// - Note this isn't supported in all browsers yet

class Wallet {
  #balance = 0;
  #transactions = [];

  constructor() {
    // Private properties
  }

  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance){
      console.log('Not enough funds');
      return;
    }
    
    this.#processWithdraw(amount);
    this.#balance -= amount;
  }

  // Private method
  #processDeposit(amount) {
    console.log(`Depositing ${amount}`);
    this.#transactions.push({
      type: 'deposit',
      amount
    });
  }

  #processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);
    this.#transactions.push({
      type: 'withdraw',
      amount
    });
  }

  get balance()       { return this.#balance }
  get transactions()  { return this.#transactions }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
wallet.withdraw(500);

console.log(wallet.balance, 'Balance');
console.log(wallet.transactions);

console.log('extra stuff');
console.log(wallet.balance);


