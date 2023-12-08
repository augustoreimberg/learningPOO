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

module.exports = sneakers;