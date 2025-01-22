class BankAccount {
    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} deposited. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${amount} withdrawn. New balance: ${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }
}
function transfer(fromAccount, toAccount, amount) {
    if (amount > 0 && fromAccount.balance >= amount) {
        fromAccount.withdraw(amount);
        toAccount.deposit(amount);
        console.log(`Transferred ${amount} from ${fromAccount.accountHolder} to ${toAccount.accountHolder}.`);
    } else {
        console.log("Transfer failed: Insufficient funds or invalid amount.");
    }
}


const account1 = new BankAccount("Alice", 1000);
const account2 = new BankAccount("Bob", 500);

account1.deposit(200);
account1.withdraw(150);

transfer(account1, account2, 300);

console.log(`Final balance of ${account1.accountHolder}: ${account1.balance}`);
console.log(`Final balance of ${account2.accountHolder}: ${account2.balance}`); 
