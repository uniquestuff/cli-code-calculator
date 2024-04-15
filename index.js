#! /usr/bin/env node
import inquirer from "inquirer";
const Num = await inquirer.prompt([
    { message: "Enter firstNumber:", type: "number", name: "first" },
    { message: "Enter secondNumber:", type: "number", name: "second" },
    {
        message: "Enter the operation",
        name: "operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
if (Num.operation === "Addition") {
    console.log(`The answer of sum is: ${Num.first + Num.second}`);
}
else if (Num.operation === "Subtraction") {
    console.log(`The answer of subtraction is: ${Num.first - Num.second}`);
}
else if (Num.operation === "Multiplication") {
    console.log(`The answer of Multiplication is: ${Num.first * Num.second}`);
}
else if (Num.operation === "Division") {
    console.log(`The answer of Division is: ${Num.first / Num.second}`);
}
