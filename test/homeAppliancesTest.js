//eletrodomesticos
const homeAppliances = require("../src/homeAppliances");

let microwave = new homeAppliances(1, "Eletrolux", "Microondas", "branco", "cozinha");

microwave.turnOn();

microwave.turnOff();