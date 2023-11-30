const chalk = require('chalk')

// const cetak = (data) => console.log(chalk.red(data))
const cetak = (data) => console.log(chalk.rgb(15, 100, 204).inverse(data))

const OTP = (length) => {
    let result = ""
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * 10)
        result += random;
    }
    return result;
}
cetak(OTP(6))

const randomPassword = (length) => {
    let result = ""
    let lowercase = "qwertyuiopasdfghjklzxcvbnm"
    let uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
    let number = "1234567890"
    let symbol = "[{]}|></?''"
    let data = lowercase + uppercase + number + symbol
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * data.length)
        result += data[random];
    }
    return result;
}
cetak(randomPassword(10))