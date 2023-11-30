const dataMahasiswa = []
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

// todo - Simpan ke Local Storage
const storeDataMahasiswa = localStorage.getItem('Data Mahasiswa')
if (storeDataMahasiswa) {
    const objStoreDataMahasiswa = JSON.parse(storeDataMahasiswa)
    dataMahasiswa.push(...objStoreDataMahasiswa)
}
// todo - do while untuk pengulangan function getDataMahasiswa
do {
    dataMahasiswa.push(getDataMahasiswa())
    counter = confirm("Lagi ?")
} while (counter)

const strDataMahasiswa = JSON.stringify(dataMahasiswa)
localStorage.setItem('Data Mahasiswa', strDataMahasiswa)

console.log(dataMahasiswa)