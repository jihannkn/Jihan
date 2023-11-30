// todo - menentukan jumlah siswa
let count = parseInt(prompt("Jumlah Mahasiswa : "))
// let count = 10
// todo - menentukan jumlah kelompok
let jumlahKelompok = parseInt(prompt("Jumlah Kelompok : "))
// let jumlahKelompok = 5
// todo - membuat variable untuk data nama;
// todo - fungsi untuk memasukkan data nama kedalam variable nama
const masukkanNama = (count) => {
    const names = []
    for(let i = 0; i < count; i++) {
        names.push(prompt("Masukkan nama : "))
    }
    return names;
}
const menentukanJumlahKelompok = (jumlahKelompok) => {
    // let random = Math.round(Math.random() * names.length)
    const kelompok = []
    for (let i = 0; i < jumlahKelompok; i++) {
        kelompok.push([]) 
    }
    return kelompok
}
const memasukkanNamaSetiapKelompok = (count, jumlahKelompok) => {
    const names = masukkanNama(count)
    const kelompok = menentukanJumlahKelompok(jumlahKelompok)
    for (let i = 0; i < kelompok.length; i++) {
        for (let j = 0; j < names.length; j++) {
            kelompok[i].push(names[j])
        }
    }
    console.log(kelompok)
}
memasukkanNamaSetiapKelompok(count, jumlahKelompok)
// console.log(menentukanJumlahKelompok(count,jumlahKelompok))
// console.log(masukkanNama(count))