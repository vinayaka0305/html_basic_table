import { fetchMovieAvailability, fetchMovieList } from "./api.js"

fetchMovieList().then((result)=>{
    console.log(result)
})