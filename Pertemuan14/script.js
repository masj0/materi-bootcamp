let inputSearch = document.getElementById("inputSearch");
const wadah = document.getElementById("wadah");

inputSearch.addEventListener("input", () => {
    wadah.innerHTML = ""
  fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=2876a436&s=${inputSearch.value}`
  )
    .then((response) => {
        
      if (!response.ok) {
        console.log("Gagal mengambil data");
      }
      return response.json();
    })
    .then((data) => {
        console.log(data.Search)
      data.Search &&
        data.Search.map((e) => {
          wadah.innerHTML += `<div class="card p-3" style="width: 18rem;">
            <img src=${e.Poster} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${e.Title}</h5>
              <p class="card-text">Year: ${e.Year}.</p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Details
  </button>
            </div>
            </div>`;
        });
    })
    .catch((error) => {
      console.log(error);
    });
});

