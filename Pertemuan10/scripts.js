// var buah = ["semangka", "melon", "jambu", "jeruk", "manggis"]

// function tampilBuah () {
//     buah.map((index, nama) => {
//         console.log(nama, index)
//     })
// }

// // function tampilBuah() {
// //     buah.map(function(nama, i) {
// //         console.log(nama, i)
// //     })
// // }

// tampilBuah()

// function hello (a, b){
//     console.log(a+b)
// }

// hello(1,2,3)


function hitungVolume() {
    var pointer = true
    while(pointer){
        var bangun = prompt(
          "Masukkan bangun ruang : [Kubus, Prisma, Tabung]"
        ).toLocaleLowerCase();
        if (bangun == "kubus") {
            // Aksi
            alert("Volume kubus adalah");
            pointer = confirm("Apakah anda mau menghitung lagi?")
        } else if (bangun == "prisma") {
            // Aksi
            alert("Volume prisma adalah");
            pointer = confirm("Apakah anda mau menghitung lagi?")
        } else if (bangun == tabung) {
            // Aksi
            alert("Volume tabung adalah");
            pointer = confirm("Apakah anda mau menghitung lagi?")
        } else{
            alert("Masukan input yang benar!");
            pointer = confirm("Apakah anda mau menghitung lagi?")
        }
        bangun = ""
    }
}

hitungVolume()
    