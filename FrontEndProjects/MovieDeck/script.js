let page = 1;

let allMovies = [];

async function callApiForAllMovie(page) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQxNzBjNjQ3MjRkMDIyZTkyOTZhNWZhOTg2NDRlYiIsInN1YiI6IjY0OTAyNGE5MjYzNDYyMDBhZTFjZGI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7il3x7f91baELU8ceqe8OYauvsHEJ-lC34vS3Gslqoc'
        }
    };
      
    let filmObj = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
    let response = await filmObj.json();
    let result = response.results;
    let objArr = [];
    result.forEach( (item) => {
        let movie = 
            {
                title: item.title,
                poster_path: item.poster_path,
                vote_average: item.vote_average,
                vote_count: item.vote_count,
                overview: item.overview,
                release_date: item.release_date           
            }
        objArr.push(movie);
    })
    generateCards(objArr);
    allMovies = objArr;
}


let searchBtn = document.getElementById('movie-search-btn');
searchBtn.onclick = function() {
    let movieName = document.getElementById('movie-search-box').value;        
    searchingMovie(movieName);
}

let currentBtn = document.getElementById('current');
let nextBtn = document.getElementById('next');
nextBtn.onclick = function() {
    page++;
    callApiForAllMovie(page);
    currentBtn.innerText = "Current Page : "+page;
}
let prevBtn = document.getElementById('prev');
prevBtn.onclick = function() {
    page--;
    callApiForAllMovie(page);
    currentBtn.innerText = "Current Page : "+page;
}

callApiForAllMovie(page);

function generateCards(film) {
    document.querySelector('.movie-card-container').innerHTML = "";

    film.forEach((item)=> {
        document.querySelector('.movie-card-container').innerHTML += 
        `<div class="movie-cards">
            <div class="overview active">
                <div class="plot"> PLOT </div>  
                ${item.overview}
            </div>
            <div class="poster">
                <img class="poster-size" src="https://image.tmdb.org/t/p/original${item.poster_path}" alt="movie-image">
                <div class="heart-icon">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div class="name-vote-sorting">
                <div class="movie-title">
                    ${item.title}
                </div>
                <div class="movie-vote">
                    Votes: ${item.vote_count}
                    <br>
                    Rating: ${item.vote_average}
                </div>
            </div>
        </div>`
    })
}


async function searchingMovie(movie) {
    let filmObj = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=494170c64724d022e9296a5fa98644eb`)
    let response = await filmObj.json();   
    let result = await response.results;
    let objArr = [];
    result.forEach( (item) => {
        let movie = 
            {
                title: item.title,
                poster_path: item.poster_path,
                vote_average: item.vote_average,
                vote_count: item.vote_count,
                overview: item.overview,
                release_date: item.release_date           
            }
        objArr.push(movie);
    })
    generateCards(objArr);
}

// let dateSort = document.getElementsByClassName('by-date')[0];
// dateSort.onclick = function() {
//     console.log(allMovies)
// }

