let var1 = 4;

// todo - || OR - salah satu benar
if (var1 === 1 || var1 !== 3) {
    console.log("TRUE")
} else {
    console.log("FALSE")
}

// todo - && AND - benar semua
if (var1 === 1 && var1 !== 3) {
    console.log("TRUE")
} else {
    console.log("FALSE")
}

let var2 = false
// todo - ! NOT 
if (!var2) {
    console.log("FALSE")
} else {
    console.log("TRUE")
}

let pilihan = parseInt(prompt("Masukkan : "));
// if (pilihan === 1) {
//     console.log("1")
// } else if (pilihan === 2) {
//     console.log("2")
// } else {
//     console.log("salah")
// }

switch (pilihan) {
    case 1:
        console.log("1")
        break;
    case 2:
        console.log("2")
        break;
    default:
        console.log("salah")
        break;
}