// When one class aquire the property of another class, then it is called inheritance.

// single inheritance :  class A (base/parent class) -> class B (derived/child class)

// multilevel inheritance:  class A (Grand Father) -> class B (Father) -> class C (child)

// Herirchical inheritance :  class A -> class B,  class A -> class C

// Super keyword : It help us to initiliaze parent class constructor into child class.

// bash class / parent class / super class
class BankAccount {
    balance: number // declare class property
    constructor(balance_value: number) {
        this.balance = balance_value
    }

    showBalance() {
        console.log("Show Balance:", this.balance)
    }
}

// derived class / child class / sub class
class SavingAccount extends BankAccount {
    constructor(balance: number) {
        super(balance)
    }

    deposit(amount: number) {
        this.balance += amount
        console.log(amount, ", successfully reposited.")
        
    }

    withdraw(amount:number) {
        this.balance -= amount
        console.log(amount, ",successfully debited from account.")
    }

}


const object1 = new SavingAccount(1000)
object1.deposit(5000)
object1.showBalance()
object1.withdraw(2000)
object1.showBalance()
