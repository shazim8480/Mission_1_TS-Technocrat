// determines access => whether to have it or not //
class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number; // don't want this to have public access //
  
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    getBalance() {
      console.log(`My Current Balance is : ${this._balance}`);
    }
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  class StudentAccount extends BankAccount{
    // test(){
    //   this.
    // }
  }

const myAccount = new BankAccount(567, "Sami", 2000);
myAccount.getBalance(); // 2000
myAccount.addDeposit(200); // 2000 + 200
myAccount.getBalance(); // 2200