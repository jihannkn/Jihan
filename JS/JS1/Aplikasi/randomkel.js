const getUsers = (count) => {
    const users = []
    for(let i = 0; i < count; i++) {
        users.push(prompt(`Masukkan nama ke ${i+1} : `))
    }
    return users;
}

const getGroups = (count) => {
    const groups = []
    for (let i = 0; i < count; i++) {
        groups.push([]) 
    }
    return groups;
}

const createTeams = (users, groups) => {
    let members = users.length / groups.length;
    groups.map(item => {
        for (let i = 0; i < members; i++) {
            item.push(users.sort(() => Math.random() - 0.5).shift())
        }
    })
    return groups;
}

let userCount = parseInt(prompt("Jumlah anggota : "))
let groupCount = parseInt(prompt("Masukkan jumlah Kelompok : "))

const hasil = createTeams(getUsers(userCount), getGroups(groupCount))

const container = document.getElementById("container")

container.innerHTML = hasil.map((item, index) => {
    return `<ul class="bungkus>
                <h1 class="judul">Kelompok ke ${index + 1} </h1>
                ${item.map(itemIn => {
                    return `<li class="item">${itemIn}</li>`
                }).join('')}
            </ul>`
}).join('')