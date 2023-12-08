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

module.exports = homeAppliances;