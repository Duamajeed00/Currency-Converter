#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t WELL COME TO 'CODE WITH FAJUR' - CURRENCY CONVERTER\n"));
// define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1, //BASE CURRENCY
    "EUR": 0.9, //EUROPEAN CURRENCY(EURO)
    "JYP": 113, //JAPANESE CURRENCY(YEN)
    "CAD": 1.3, //CANADIAN DOLLAR
    "AUD": 1.65, //AUSTRALIAN DOLLAR
    "PKR": 277.70, //PAKISTANI RUPEES
    // ADD MORE CIRRENCIES AND THEIR EXCHANGE RATES HERE
};
//  Prompt the user to select currencies to convert from and to 
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",
    }
]);
// perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`Converted Amount = ${chalk.magentaBright(converted_amount.toFixed(2))}`);
