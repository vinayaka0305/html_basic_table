//use the API given below
const API_KEY = "f1a87d30ad8792e0dd1c12ce07d37337";
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
//edit the below given HTML to render content dynamically
const movies = document.querySelector("#movies");
const sortingSelection = document.querySelector("#sort");

async function fetchData() {
    let response = await fetch(API_URL);
    let data = await response.json();
    return data.results
    // console.log(data.results);
}


function creatMovieList(movie) {
    return `<div class="movie">
    <img class="poster" src=https://image.tmdb.org/t/p/w500${movie.poster_path} alt="movie-title">
    <div>
      <h2 class="movie-title">${movie.title}</h2>
      <p class="release-year">${movie.release_date}</p>
      <p class="movie-overview">${movie.overview}</p>
   </div>
  </div>`
}

const sortAndDisplay = async function (selectedValue) {
    let data = await fetchData();
    data.sort((a, b) => {
        let yearA = parseInt(a.release_date.substring(0, 4), 10);
        let yearB = parseInt(b.release_date.substring(0, 4), 10);

        if (selectedValue === "asc") {
            return yearA - yearB;
        } else {
            return yearB - yearA;
        }
    })
    movies.innerHTML = '';

    data.forEach(movie => {
        movies.innerHTML += creatMovieList(movie);
    })

}

sortingSelection.addEventListener("change", function () {
    sortAndDisplay(sortingSelection.value);
})

async function allMovies(){
    let data = await fetchData()
    data.forEach(movie => {
        movies.innerHTML += creatMovieList(movie);
    })
}

allMovies();





