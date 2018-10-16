const MOVIES_URL = "http://www.omdbapi.com/?s=batman&apikey=e46499e1"
let moviesDetails = document.getElementById("movieDetails")
let moviesList = document.getElementById("movieList")



function showMovieDetails(imdbID) {
 
    MOVIE_URL = `http://www.omdbapi.com/?i=${imdbID}&apikey=e46499e1`
    request = new XMLHttpRequest();
    request.open("GET", MOVIE_URL);
    request.responseType = 'json';
    request.send();

    request.onload = function(){
        let movie = request.response
            console.log(movie.Title)
            let movieTitle = `
            <div><h1 class="title">${movie.Title}</h1></div>
            <div class="info-container">
            <div class="image"><img src = "${movie.Poster}"</img></div>
            <div class"info">
            <h4>Year: ${movie.Year}</h4>
            <h4>Director: ${movie.Director}</h4>
            <h4>Released: ${movie.Released}</h4>
            <h4>Rating: ${movie.Rated}</h4>
            <p>${movie.Plot}</p>
            </div>
            </div>
            `
            moviesDetails.innerHTML = movieTitle

        }
       
     
    
    }
   
        




function displayMovies(movies) {

    let movieItems =  movies.Search.map(function(movie){
        
        return `<li>
        <div><img src="${movie.Poster}"></img></div>
        
        <div><a onclick="showMovieDetails('${movie.imdbID}')" href="#">${movie.Title}</a></div>
        
        </li>`
        
         })
    
         
    moviesList.innerHTML = movieItems.join('')
  }
  
function getMovies() {
    request = new XMLHttpRequest();
    request.open("GET", MOVIES_URL);
    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var  movie = request.response;
        displayMovies(movie)
    }
}

getMovies();