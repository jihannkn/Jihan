const dataMahasiswa = []

// todo - Simpan ke Local Storage
const storeDataMahasiswa = localStorage.getItem('Data Mahasiswa')
const objStoreDataMahasiswa = JSON.parse(storeDataMahasiswa)
if (storeDataMahasiswa) {
    dataMahasiswa.push(...objStoreDataMahasiswa)
}

let counter;
const getDataMahasiswa = () => {
    const Mahasiswa = {}
    // todo - array sebagai properti dari object Mahasiswa
    const data = ['FullName', 'NIM', 'Email', 'NoHP']
    // todo - function map sebagai penampung data array dari prompt
    data.map(item => {
        do {
            Mahasiswa[item] = prompt(`Masukkan ${item} : `)
        } while (Mahasiswa[item] === null || Mahasiswa[item] === "")
    })
    return Mahasiswa
}

// todo - do while untuk pengulangan function getDataMahasiswa
do {
    dataMahasiswa.push(getDataMahasiswa())
    counter = confirm("Lagi ?")
} while (counter)

const strDataMahasiswa = JSON.stringify(dataMahasiswa)
localStorage.setItem('Data Mahasiswa', strDataMahasiswa)

console.log(dataMahasiswa)