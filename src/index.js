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


// function deleteMovieById(id){
//     const options = {
//         method: 'DELETE',
//     }
//     return fetch(`${BASE_URL}/movies/${id}`, options).then(response => response.json())
// }

// deleteMovieById(3)


const updates = {
    title: "Start",
}
function getPatchId(elementId, updates){
const options = {
    method: 'PATCH',
Headers: {
    'Content-type ' :'application/json'
},

body: JSON.stringify(updates)
}
return fetch(`${BASE_URL}/movies/${elementId}`, options).then(response => response.json())
}


getPatchId('5', updates)










