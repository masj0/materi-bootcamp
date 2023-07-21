let pilihan = ["gajah", "manusia", "semut"]
let hasil = document.getElementById('hasil')
let pemain = document.getElementById('pemain')
let musuh = document.getElementById('musuh')
let played = document.getElementById('played')

let player = function(e){
    let komputer = pilihan[Math.floor(Math.random() * pilihan.length)]
    pemain.src = `./assets/${e}.png`
    musuh.src = `./assets/${komputer}.png`
    played.style.display = 'flex'
    if(e === komputer) {
        hasil.innerHTML = `Anda memilih ${e} dan komputer memilih ${komputer}. Hasil seri!`
    }else if(e === "gajah" && komputer === "manusia" || e === "manusia" && komputer === "semut" || e === "semut" && komputer === "gajah"){
        hasil.innerHTML = `Anda memilih ${e} dan komputer memilih ${komputer}. Selamat anda menang!`
    }else{
        hasil.innerHTML = `Anda memilih ${e} dan komputer memilih ${komputer}. Maaf anda kalah!`
    }
}


