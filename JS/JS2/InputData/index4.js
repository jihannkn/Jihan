const prompt = require('prompt-sync')()
const { getDataMahasiswa } = require("./index3")

let counter;

do {
    getDataMahasiswa(["Username", "NIM", "Email", "NoHP"])
    counter = prompt("Apakah Ingin Mengulang ? (y/n) ") 
} while (counter === "y" || counter === "Y")