"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}
function calculator() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Enter the first number: ", function (num1) {
        rl.question("Enter the second number: ", function (num2) {
            rl.question("Enter the operation you want to perform (+, -, *, /): ", function (operator) {
                var n1 = Number(num1);
                var n2 = Number(num2);
                var result;
                switch (operator) {
                    case "+":
                        result = add(n1, n2);
                        break;
                    case "-":
                        result = subtract(n1, n2);
                        break;
                    case "*":
                        result = multiply(n1, n2);
                        break;
                    case "/":
                        result = divide(n1, n2);
                        break;
                    default:
                        throw new Error("Invalid operator.");
                }
                console.log("The result of ".concat(n1, " ").concat(operator, " ").concat(n2, " is ").concat(result, "."));
                rl.close();
            });
        });
    });
}
calculator();
