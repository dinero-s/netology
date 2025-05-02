#!/usr/bin/env node

const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')

const now = new Date();

const argv = yargs(hideBin(process.argv))
    .command('current', 'Текущая дата и время', (yargs) => {
        return yargs
            .option('year', {
                alias: 'y',
                type: 'boolean',
                description: 'Текущий год'
            })
            .option('month', {
                alias: 'm',
                type: 'boolean',
                description: 'Текущий месяц'
            })
            .option('day', {
                alias: 'd',
                type: 'boolean',
                description: 'Текущий день'
            })
    }, (argv) => {
        if (argv.year) {
            console.log(`<Текущий год: ${now.getFullYear()}`)
        }
        if (argv.month) {
            console.log(`<Текущий месяц: ${now.getMonth() + 1}`)
        }
        if (argv.day) {
            console.log(`<Текущий день: ${now.getDate()}`)
        }
    })
    .command('add', 'Добавить год/месяц/день', (yargs) => {
        return yargs
            .option('year', {
                alias: 'y',
                type: 'number',
                description: 'Добавить год'
            })
            .option('month', {
                alias: 'm',
                type: 'number',
                description: 'Добавить месяц'
            })
            .option('day', {
                alias: 'd',
                type: 'number',
                description: 'Добавить день'
            })
    }, (argv) => {
        if (argv.year) {
            console.log(`<Результат сложения годов: ${now.getFullYear() + argv.year}`)
        }
        if (argv.month) {
            console.log(`<Результат сложения месяцев: ${now.getMonth() + 1 + argv.month}`)
        }
        if (argv.day) {
            console.log(`<Результат сложения дней: ${now.getDate() + argv.day}`)
        }
    })
    .command('sub', 'Отнять год/месяц/день', (yargs) => {
        return yargs
            .option('year', {
                alias: 'y',
                type: 'number',
                description: 'Отнять год'
            })
            .option('month', {
                alias: 'm',
                type: 'number',
                description: 'Отнять месяц'
            })
            .option('day', {
                alias: 'd',
                type: 'number',
                description: 'Отнять день'
            })
    }, (argv) => {
        if (argv.year) {
            console.log(`<Результат вычитания годов: ${now.getFullYear() - argv.year}`)
        }
        if (argv.month) {
            console.log(`<Результат вычитания месяцев: ${now.getMonth() + 1 - argv.month}`)
        }
        if (argv.day) {
            console.log(`<Результат вычитания дней: ${now.getDate() - argv.day}`)
        }
    })
    .argv
