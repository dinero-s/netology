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
    .argv

//TODO Добавить add и sub

