#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth() + 1
const currentDay = currentDate.getDate()

console.log(currentDate, currentYear, currentMonth, currentDay)

// Не смог понять как реализовать методы add и sub. Когда отправите на доработку, подкиньте идею плиз)
