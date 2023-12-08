// contas correntes
class currentAccounts{
    constructor(id, user, balance, creditLimit){
        this.id = id,
        this.user = user,
        this.balance = balance,
        this.creditLimit = creditLimit
    }

    deposit(depositValue){
        this.balance = this.balance + depositValue;
        console.log(this.user, ", seu valor foi depositado. Saldo atual de:", this.balance);
    }

    withdraw(withdrawValue){
        if(this.balance > withdrawValue){
            this.balance = this.balance - withdrawValue;
            console.log(this.user, ", Retire o valor solicitado no local indicado. Saldo atual de:", this.balance);
        }
        else{
            console.log(this.user, ", o valor solicitado não está disponivel para saque. Saldo atual de:", this.balance);
        }
    }

    creditPurchase(purchaseValue, installments){
        if (purchaseValue <= this.creditLimit){
            if(installments){
                console.log(this.user, ", sua compra no valor de:", purchaseValue, "foi concluída em", installments, "vezes de:", purchaseValue/installments);
            }
            else{
                console.log(this.user, ", sua compra no valor de:", purchaseValue, "foi concluída em 1 vez no crédito");
            }
        }
        else{
            console.log(this.user, ", seu limite de crédito não é suficiente para a compra!");
        }
    }
}

module.exports = currentAccounts;