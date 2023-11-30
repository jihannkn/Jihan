const dataMahasiswa = []
let counter;
const getDataMahasiswa = () => {
    const Mahasiswa = {}
    do {
        Mahasiswa.username = prompt("Masukkan Nama : ")
        Mahasiswa.nim = prompt("Masukkan Nim : ")
        Mahasiswa.email = prompt("Masukkan Email : ")
        Mahasiswa.nohp = prompt("Masukkan No HP : ")
    } while (Mahasiswa.username === null || Mahasiswa.username === "" ||
    Mahasiswa.nim === null || Mahasiswa.nim === "" ||
    Mahasiswa.email === null || Mahasiswa.email === "" ||
    Mahasiswa.nohp === null || Mahasiswa.nohp === "")

    return Mahasiswa
}

do {
    dataMahasiswa.push(getDataMahasiswa())
    counter = confirm("Lagi ?")
} while (counter)

const strDataMahasiswa = JSON.stringify(dataMahasiswa)
localStorage.setItem('Data Mahasiswa', strDataMahasiswa)

console.log(dataMahasiswa)