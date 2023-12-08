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
        console.log(this.model, "foi ligado!");
    }

    turnOff(){
        console.log(this.model, "foi desligado!");
    }
}

module.exports = homeAppliances;