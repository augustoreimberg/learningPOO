// pessoas
class people{
    constructor(register, name, surname, height, weigth){
        this.regiter = register,
        this.name =  name,
        this.surname = surname,
        this.height = height,
        this.weight = weigth
    }

    wakeUp(){
        console.log("Bom dia!", this.name, this.surname);
    }

    sleep(){
        console.log("Boa noite!", this.name, this.surname);
    }
}

let augusto = new people(1, "Augusto", "Reimberg", 1.79, 66.2);

augusto.wakeUp();

augusto.sleep();

// tênis
class sneakers{
    constructor(id, name, brand, color, material){
        this.id = id,
        this.name = name,
        this.brand = brand,
        this.color = color,
        this.material = material
    }

    tieShoelace(){
        console.log("Cadarço de", this.brand, this.name, "amarrado")
    }

    untieShoelace(){
        console.log("Cadarço de", this.brand, this.name, "desamarrado")
    }
}

let airMax = new sneakers(1, "AirMax", "Nike", "Azul", "couro");

airMax.tieShoelace();

airMax.untieShoelace();

// eletrodomesticos
class homeAppliances{
    constructor(id, brand, model, color, utility){
        this.id = id,
        this.brand = brand,
        this.model = model,
        this.color = color,
        this.utility = utility
    }

    turnOn(){
        console.log(this.model, "foi ligada!");
    }

    turnOff(){
        console.log(this.model, "foi desligada!");
    }
}

let microwave = new homeAppliances(1, "Eletrolux", "Microondas", "branco", "cozinha");

microwave.turnOn();

microwave.turnOff();

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

    créditPurchase(purchaseValue, installments){
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

let augustoAccount = new currentAccounts(1, "Augusto Reimberg", 100, 200);

augustoAccount.deposit(150);
augustoAccount.withdraw(50);
augustoAccount.créditPurchase(100, 4);
