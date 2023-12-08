//pessoas
let people = require("./people");

let augusto = new people(1, "Augusto", "Reimberg", 1.79, 66.2);

augusto.wakeUp();

augusto.sleep();

// tenis
let sneakers = require("./sneakers");

let airMax = new sneakers(1, "AirMax", "Nike", "Azul", "couro");

airMax.tieShoelace();

airMax.untieShoelace();

//eletrodomesticos
let homeAppliances = require("./homeAppliances");

let microwave = new homeAppliances(1, "Eletrolux", "Microondas", "branco", "cozinha");

microwave.turnOn();

microwave.turnOff();

//contas correntes
let currentAccounts = require("./currentAccounts");

let augustoAccount = new currentAccounts(1, "Augusto Reimberg", 100, 200);

augustoAccount.deposit(150);
augustoAccount.withdraw(50);
augustoAccount.creditPurchase(100, 4);
