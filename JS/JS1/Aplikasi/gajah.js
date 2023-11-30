// todo - variable array comp (gajah, semut, manusia)
const random = () => {
    const value = ["gajah", "semut", "manusia"]
    return value[Math.floor(Math.random() * value.length)]
}

const user = prompt("Masukkan pilihan anda\n(GAJAH, SEMUT, MANUSIA): ")
const comp = random()

// todo - pengkondisian user x comp
const program = (user, comp) => {
    console.log({user, comp})
    let hasil;
    if (user === comp) {
        return hasil = "draw";
    } else if (
        user === "semut" && comp === "gajah" ||
        user === "gajah" && comp === "manusia" ||
        user === "manusia" && comp === "semut") {
        return hasil = "menang";
    } else if (
        user === "gajah" && comp === "semut" ||
        user === "manusia" && comp === "gajah" ||
        user === "semut" && comp === "manusia") {
        return hasil = "kalah";
    } else {
        return hasil = "diluar kondisi";
    }
}
alert(`Kamu memilih ${user} dan komputer memilih ${comp} maka kamu ${program(user.toLocaleLowerCase(), comp)} dari komputer`)

// todo - random index variablle comp