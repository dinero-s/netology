const readline = require('node:readline');
const {stdin: input} = require('node:process');

const rl = readline.createInterface({input});

console.log("Угадай число от 1 до 10")
const rightNumber = 1;

rl.on('line', (input) => {

    if (isNaN(input)) {
        console.log("Введи число, а не текст!");
    } else if (input >=10 || input <= 0) {
        console.log("Введи число от 1 до 10")
    } else if (input < rightNumber) {
        console.log("Больше")
    } else if (input > rightNumber) {
        console.log("Меньше")
    } else if (input == rightNumber) {
        console.log(`Правильно! Ответ: ${input}`)
        rl.close();
    }
}); 


