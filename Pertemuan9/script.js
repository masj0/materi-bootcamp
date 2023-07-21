// var nama = prompt("Masukkan nama anda: ")
// var umur = prompt("Masukkan umur anda: ")
// var alamat = prompt("Masukan alamat anda: ")

// alert(`Hallo ${nama}, umur anda adalah ${umur} tahun. Alamat anda di ${alamat} `)

// var pointer = true

// while(pointer){
//     var angka1 = prompt("Masukan nilai pertama : ")
//     var angka2 = prompt("Masukan nilai kedua : ")
//     var result = angka1 * angka2 
//     alert(`Hasil perkalian adalah : ${result}`)
//     pointer = confirm("Apakah anda ingin menghitung lagi?")
// }


// var pointer = true

// while(pointer){
//     var angka1 = Math.floor(Math.random() * 50)
//     var angka2 = Math.floor(Math.random() * 50)
//     var result = prompt(`Hasil dari ${angka1} + ${angka2} adalah: `)
//     result && angka1 + angka2 ? alert("Jawaban anda benar") : alert("Jawaban anda salah")
//     pointer = confirm("Apakah anda mau bermain lagi?")
// }


// var nilai = prompt("Masukkan nilai anda: ")

// switch(true){
//         case (nilai >= 90 && nilai <= 100):
//             alert("Nilai anda sangat bagus")
//             break;
//         case (nilai >= 80 && nilai < 90):
//             alert("Nilai anda bagus")
//             break;
//         case (nilai >= 70 && nilai < 80):
//             alert("Nilai anda Cukup")
//             break;
//         case (nilai < 70):
//             alert("Nilai anda Buruk")
//             break;
//         default:
//             alert("Masukan nilai yang benar")


// }

// Function Declaration

// function hitungLuasPersegi(sisi){
//     console.log("Luas persegi adalah ", sisi * sisi)
// }


// Function Expression
// var hitungLuasSegitiga = function (alas, tinggi){
//     return alas * tinggi / 2
// }


// hitungLuasPersegi(10)
// hitungLuasPersegi(8)
// hitungLuasPersegi(16)
// hitungLuasPersegi(13)
// hitungLuasPersegi(19)
// console.log("Luas segitiga adalah ", hitungLuasSegitiga(10, 20))

// var player = prompt("Masukan Gajah, Manusia, Semut").toLowerCase()
// var pilihan = ["gajah", "manusia", "semut"]
// var komputer = pilihan[Math.floor(Math.random() * pilihan.length)]


// if(player === komputer) {
//     alert(`Anda memilih ${player} dan komputer memilih ${komputer}. Hasil seri!`)
// }else if(player === "gajah" && komputer === "manusia" || player === "manusia" && komputer === "semut" || player === "semut" && komputer === "gajah"){
//     alert(`Anda memilih ${player} dan komputer memilih ${komputer}. Selamat anda menang!`)
// }else{
//     alert(`Anda memilih ${player} dan komputer memilih ${komputer}. Maaf anda kalah!`)
// }

var angka = Math.floor(Math.random() * 20)
var pointer = 1

while(pointer <=5 ){
    var inputan = prompt("Masukkan angka tebakan")
    if(angka == inputan) {
        alert(`tebakan benar, angkanya adalah ${angka}`)
        break
    }else if( angka > inputan){
        alert("Angka Terlalu kecil")
        pointer++
    }
    else if( angka < inputan){
        alert("Angka Terlalu besar")
        pointer++
    }
    pointer > 5 ? alert("Maaf kamu gagal") : ""
}




