let ulang = false;

do {
    let pilihan = parseInt(prompt("Pilih nilai (1. Luas || 2. Volume)"));
    switch (pilihan) {
        case 1:
            let pilihanLuas = parseInt(prompt("(1. Kubus || 2. Kerucut || 3. Tabung || 4. Balok)"));
            switch (pilihanLuas) {
                case 1:
                    let sisiKubus = parseInt(prompt("Masukkan sisi :"))
                    hitungLuasKubus = sisiKubus * sisiKubus * sisiKubus
                    alert(hitungLuasKubus)
                    break;
                case 2:
                    let jarijariKerucut = parseInt(prompt("Masukkan jari-jari :"))
                    let sisiMiring = parseInt(prompt("Masukkan sisi miring :"))
                    hitungLuasKerucut = Math.PI * jarijariKerucut  * (jarijariKerucut + sisiMiring)
                    alert(hitungLuasKerucut)
                    break;
                case 3:
                    let jarijariTabung = parseInt(prompt("Masukkan jari-jari :"))
                    let tinggiTabung = parseInt(prompt("Masukkan tinggi :"))
                    hitungLuasTabung = 2 * Math.PI * jarijariTabung * (jarijariTabung + tinggiTabung )
                    alert(hitungLuasTabung)
                    break;
                case 4:
                    let panjang = parseInt(prompt("Masukkan panjang :"))
                    let lebar = parseInt(prompt("Masukkan lebar :"))
                    let tinggiBalok = parseInt(prompt("Masukkan tinggi :"))
                    hitungLuasBalok = 2 * (panjang*lebar) + (panjang*tinggiBalok) + (lebar*tinggiBalok)
                    alert(hitungLuasBalok)
                    break;
                default:
                    alert("Pilihan salah")
                    break;
            }
            break;
        case 2:
            let pilihanVolume = parseInt(prompt("(1. Kubus || 2. Kerucut || 3. Tabung || 4. Balok)"));
            switch (pilihanVolume) {
                case 1:
                    let sisiKubus = parseInt(prompt("Masukkan sisi :"))
                    hitungVolKubus = 6 * sisiKubus * sisiKubus
                    alert(hitungVolKubus)
                    break;
                case 2:
                    let jarijariKerucut = parseInt(prompt("Masukkan jari-jari :"))
                    let tinggiKerucut = parseInt(prompt("Masukkan tinggi :"))
                    hitungVolKerucut = 1/3 * Math.PI * jarijariKerucut * jarijariKerucut * tinggiKerucut
                    alert(hitungVolKerucut)
                    break;
                case 3:
                    let jarijariTabung = parseInt(prompt("Masukkan jari-jari :"))
                    let tinggiTabung = parseInt(prompt("Masukkan tinggi :"))
                    hitungVolTabung = Math.PI * jarijariTabung * jarijariTabung * tinggiTabung
                    alert(hitungVolTabung)
                    break;
                case 4:
                    let panjang = parseInt(prompt("Masukkan panjang :"))
                    let lebar = parseInt(prompt("Masukkan lebar :"))
                    let tinggiBalok = parseInt(prompt("Masukkan tinggi :"))
                    hitungVolBalok = panjang * lebar * tinggiBalok
                    alert(hitungVolBalok)
                    break;
                default:
                    alert("Pilihan salah")
                    break;
            }
            break;
        default:
            alert("Pilihan tidak tersedia")
            break;
    }

    ulang = confirm("Mengulang program?")
} while (ulang);