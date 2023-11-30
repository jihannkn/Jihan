const chalk = require('chalk')

// const cetak = (data) => console.log(chalk.red(data))
const cetak = (data) => console.log(chalk.rgb(15, 100, 204).inverse(data))

cetak("omaygat")


//  ? FUNCTION DECLARATION
function penjumlahan (a,b) {
    return a + b
}

//  ? FUNCTION EXPRESSION
const pengurangan = function (a,b) {
    return a - b
}

//  ? ARROW FUNCTION
const perkalian = (a,b) => a * b


const operasiHitung = (nilai1, nilai2, operator) => {
    let hasil;
    switch (operator) {
        case '+':
            hasil = nilai1 + nilai2
            break;
        case '-':
            hasil = nilai1 - nilai2
            break;
        case '*':
            hasil = nilai1 * nilai2
            break;
        case '/':
            hasil = nilai1 / nilai2
            break;
        default:
            console.log("Operasi hitung tidak tersedia")
            break;
    }
    return hasil
}
console.log(operasiHitung(10,3,"+"))
console.log(operasiHitung(10,2,"-"))
console.log(operasiHitung(6,5,"*"))
console.log(operasiHitung(30,5,"/"))

