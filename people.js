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

module.exports = people;