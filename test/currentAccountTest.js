//contas correntes
let currentAccounts = require("../src/currentAccounts");

let augustoAccount = new currentAccounts(1, "Augusto Reimberg", 100, 200);

augustoAccount.deposit(150);
augustoAccount.withdraw(50);
augustoAccount.creditPurchase(100, 4);