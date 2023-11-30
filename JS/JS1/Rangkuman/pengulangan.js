
// for (let i = 0; i < 12; i++) {
//     console.log(i)
// }


let length = parseInt(prompt("pengulangan"));
for (let k = 1; k <= length; k++) {
    console.log(k)
}

// let length = parseInt(prompt("pengulangan"));
// for (let k = 100; k >= length; k--) {
//     console.log(k)
// }

let ulang = false
do {
    console.log("Hello");
    ulang = confirm("Yakin?")
} while (ulang)


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
        console.log(i + " adalah Ganjil")
    } else {
        console.log(i + " adalah Genap")
    }
}
