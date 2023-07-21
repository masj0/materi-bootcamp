// let nama = "Budi"

// setTimeout(() => console.log("Nama adalah", nama), 10000)

// console.log(nama)
// for(let i = 0; i < 10; i++){
//     console.log("Ini adalah perulangan ke ", i)
// }

// let nama = "Budi"

// function hello (callback) {
//     console.log("Hello world")
//     setTimeout(() => {
//         callback()
//     },)
// }

// function panggil () {
//     console.log(nama)
// }

// hello(panggil)

const apiKey = "2876a436";

const title = prompt("Masukkan film yang anda cari")
const gambar = document.getElementById("gambar")

function fetchData() {
  const xhr = new XMLHttpRequest();
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=2876a436&s=avenger`;

  xhr.onreadystatechange = () => {
    // In local files, status is 0 upon success in Mozilla Firefox
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const status = xhr.status;
      if (status === 0 || (status >= 200 && status < 400)) {
          // The request has been completed successfully
        const data = JSON.parse(xhr.response)
        console.log(data.Search)
      } else {
        // Oh no! There has been an error with the request!
        console.log("Gagal")
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

fetchData()