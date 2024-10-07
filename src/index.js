// function fetchMovieById(movieId){
//     return fetch(`http://localhost:3000/movies/${movieId}`)
//     .then(response => response.json())

// }

const BASE_URL = 'http://localhost:3000'
const newMovie = {
      title: "CSS",
      director: "CSS",
    genres: [
        "Comedy"
    ],
      rating: 8
}

    
function createMovie(newMovie) {
    const options = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(newMovie)
}
   return  fetch(`${BASE_URL}/movies`, options).then(response => response.json())
    }





createMovie(newMovie)














