const readline = require('node:readline');
const { stdin: input } = require('node:process');
const rl = readline.createInterface({ input });

let winCount = 0
let looseCount = 0
let winArr = []
let looseArr = []
let sumArr = []

console.log("Орёл или решка? Введите 1 если думаете, что ОРЁЛ, 2 - РЕШКА")

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let headsOrTails = getRandomNumber(1, 3)

rl.on('line', (input) => {
  if (+input === headsOrTails) {
    if(+input === 1) {
      winArr.push('win')
      console.log("Угадал - орел!")
    } 
    else if(+input === 2) {
      winArr.push('win')
      console.log("Угадал - решка!")
    } 
  } else {
    console.log("Не угадал")
    looseArr.push('loose')
  }
  headsOrTails = getRandomNumber(1, 3);

  // Задание № 2* (Не обязательное)

  sumArr = winArr.concat(looseArr)
  let totalParties = sumArr.length
  let winParties = winArr.length
  let looseParties = looseArr.length
  let percentage
  if(winParties != 0 && looseParties != 0) {
    percentage = winParties * 100 / totalParties
  }
  let obj = {
    "Общее количество партий" : totalParties,
    "Количество выигранных партий" : winParties,
    "Количество проигранных партий" : looseParties,
    "Процентное соотношение выигранных партий" : percentage
  }
  console.log(obj)
}); 

