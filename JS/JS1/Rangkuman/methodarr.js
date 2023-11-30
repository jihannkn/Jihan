const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// // todo - isi data dari index
// const at = arr.at(1)
// console.log(at)

// // todo - mengisi data belakang sendiri
// const push = arr.push(11)
// console.log(push)

// // todo - menghilangkan data
// const pop = arr.pop()
// console.log(pop)

// // todo - mengganti semua
// const fill = arr.fill(2)
// console.log(fill)

// // todo - menghilangkan semua data
// const len = arr.length
// for (let i = 0; i < len; i++) {
//     arr.pop()
// }
// console.log(arr)

// // todo - menambahkan string di array
// console.log(arr.join(" | "))

// // todo - melanjutkan data
// for (let j = 0; j < 5; j++) {
//     console.log(arr.shift())
// }
// console.log("gap")
// for (let j = 0; j < 5; j++) {
//     console.log(arr.shift())
// }

// const newArr = []
// for (let k = 0; k < 5; k++) {
//     newArr.push(arr.shift())
// }
// console.log(arr)
// console.log(newArr)

// // todo - membalikkan isi array
// const reverseNewArr = newArr.reverse()
// console.log(reverseNewArr)

// // todo - menambahkan panjang dari isi array dan menambahkan di awal
// arr.unshift(1.1, 2.2, 3.3)
// console.log(arr)

// // todo - true false angka yang ada di array
// console.log(arr.includes(5))

// todo - memetakan data yang ada di dalam array
for (let i =0; i < arr.length; i++) {
    console.log(arr[i])
}
const newArr = arr.map(item => item)

// todo - sama dengan map hanya tidak bisa mengembalikan nilai atau tidak bisa return
const newArr2 = arr.forEach((item, index) =>
console.log(`ke ${index} = ${item}`))

// todo - mengembalikan semua nilai
const filterdArr = arr.filter(item => item > 5)
console.log(filterdArr)

// todo - mengembalikan nilai pertama kali
const findedArr = arr.find(item => item > 5)
console.log(findedArr)

// todo - memastikan isi array apakah lebih dari 0 (false krn terdapat angka 0 pd isi array)
const everyArr = arr.every(item => item > 0)
console.log(everyArr)

// todo - untuk menemukan index ke berapa item yg dicari
const indexArr = arr.findIndex(item => item === 3)
console.log(indexArr)

// todo - untuk menjumlahkan a + b yang a diulang index selanjutnya
const hasil = arr.reduce((a,b) => a+b)
console.log(hasil)