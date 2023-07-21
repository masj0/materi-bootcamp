class DataSiswa{
    // Menampung nilai
    constructor(argumen1, argumen2) {
       this.nama = argumen1
       this.alamat = argumen2
    }

    tampil(){
        console.log(this.nama)
    }
}


var data1 = new DataSiswa("Jo", "Bandung")
data1.tampil()


// function data (nama, umur, alamat, jenkel) {
//     this.nama = nama;
//     this.umur = umur;
//     this.alamat = alamat;
//     // Tidak bisa menambah properti dengan mengakses function 
//     data.jenkel = jenkel;
// }


// var dataBaru = new data("Budi", 24, "Baturaden", "Laki laki")
// console.log(dataBaru)



// Inheritence / Pewarisan
// class DataLengkap extends DataSiswa{
//     constructor(nama, alamat, umur, tampil){
//         super(nama, alamat, tampil)
//         this.umur = umur
//     }
// }


// var data2 = new DataLengkap("Hendra", "Karang Salam", 39 )
// console.log(data2)
// data2.tampil()

// class TebakAngka{
//     constructor(){
//         this.angka = Math.floor(Math.random() * 20 + 1)
//         this.attempt = 0
//     }

//     guess(){

//     }


// }

// var game = new TebakAngka;
// var pointer = true
// while (pointer || game.guess <= 5){
//     var inputPemain = prompt("")



// }


// console.log(document)

var paragraf = document.getElementById("paragraf")
paragraf.innerHTML = "Halo nama saya budi, saya berasal dari Cilacap"

var tombol = document.getElementById("tombol")
tombol.addEventListener("click", () => paragraf.innerHTML = "Suda diklik")