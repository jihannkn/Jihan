//  ? ARRAY OF OBJECT

const Mahasiswa = [
    {
        id: 0,
        username: "Anjay",
        mataKuliah: ["APS", "RPL"],
        nilai: [80, 78]
    },
    {
        id: 1,
        username: "Waw",
        mataKuliah: ["PBO", "RPL"],
        nilai: [90, 88]
    },
    {
        id: 2,
        username: "Omeg",
        mataKuliah: ["APS", "RPL"],
        nilai: [80, 78]
    },
];
const Siswa = [
    {
        id: 0,
        username: "Anjay",
        mataKuliah: ["APS", "RPL"],
        nilai: [80, 78]
    },
    {
        id: 1,
        username: "Waw",
        mataKuliah: ["PBO", "RPL"],
        nilai: [90, 88]
    },
    {
        id: 2,
        username: "Omeg",
        mataKuliah: ["APS", "RPL"],
        nilai: [80, 78]
    },
];

const loopingArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array)
    }
}

loopingArray(Mahasiswa[2].username)