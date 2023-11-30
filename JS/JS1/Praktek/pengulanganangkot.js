for (let i = 1; i <= 10; i++) {
    console.log(`Angkot ${i} berjalan dengan baik`)
}

for (let i = 1; i <= 10; i++) {
    if (i === 2 || i === 5 || i === 8) {
        console.log(`Angkot ${i} broken`)
    } else {
        console.log(`Angkot ${i} berjalan dengan baik`)
    }
}

for (let i = 1; i <= 10; i++) {
    if (i === 2 || i === 5) {
        console.log(`Angkot ${i} broken`)
    } else if (i === 3) {
        console.log(`Angkot ${i} berjalan tapi sepi`)
    } else if (i === 6) {
        console.log(`Angkot ${i} berjalan resing`)
    } else if (i === 8) {
        console.log(`Angkot ${i} broken dan tidak resing`)
    } else {
        console.log(`Angkot ${i} berjalan dengan baik`)
    }
}