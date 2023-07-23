
let page = 1;
let lastPage;
let allMovies = [];
let prevBtn = document.getElementById('prev');
// Pages control
let currentBtn = document.getElementById('current');
let nextBtn = document.getElementById('next');


function updatePageButtons() {
    if (page === 1) {
        prevBtn.disabled = true;
        prevBtn.style.backgroundColor = "gray";
    } else {
        prevBtn.disabled = false;
        prevBtn.style.backgroundColor = "rgba(241, 88, 5, 0.792)";
    }

    if (page === lastPage) {
        nextBtn.disabled = true;
        nextBtn.style.backgroundColor = "gray";
    } else {
        nextBtn.disabled = false;
        nextBtn.style.backgroundColor = "rgba(241, 88, 5, 0.792)";
    }
}

nextBtn.onclick = function () {
    if (page !== lastPage) {
        page++;
        updatePageButtons();
        callApiForAllMovie(page);
        currentBtn.innerText = "Current Page: " + page;
    }
};

prevBtn.onclick = function () {
    if (page !== 1) {
        page--;
        updatePageButtons();
        callApiForAllMovie(page);
        currentBtn.innerText = "Current Page: " + page;
    }
};




callApiForAllMovie(page);

// API Data storage 
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
    lastPage = (response.total_pages);
    // lastPage = 4;

    result.forEach((item) => {
        let movie =
        {
            title: item.title,
            poster_path: item.poster_path,
            vote_average: item.vote_average,
            vote_count: item.vote_count,
            overview: item.overview,
            release_date: item.release_date,
            id: item.id,
        }
        objArr.push(movie);
    })
    generateCards(objArr);
    moviesData(objArr);

}

// Card Rendering 
function generateCards(films) {
    document.querySelector('.movie-card-container').innerHTML = "";

    films.forEach((item) => {
        document.querySelector('.movie-card-container').innerHTML +=
            `<div class="movie-cards" id="${item.id}">
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
    favMoviesContainerAdding();
}


// Searching
let searchBtn = document.getElementById('movie-search-btn');
searchBtn.onclick = function () {
    let movieName = document.getElementById('movie-search-box').value;
    searchingMovie(movieName);
}


async function searchingMovie(movie) {
    let filmObj = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=494170c64724d022e9296a5fa98644eb`)
    let response = await filmObj.json();
    let result = await response.results;
    let objArr = [];
    result.forEach((item) => {
        let movie =
        {
            title: item.title,
            poster_path: item.poster_path,
            vote_average: item.vote_average,
            vote_count: item.vote_count,
            overview: item.overview,
            release_date: item.release_date,
            id: item.id,
        }
        objArr.push(movie);
    })
    generateCards(objArr);
}



// Fav adding 
let fav = document.querySelector('.movie-card-container');
fav.addEventListener('click', (e) => {
    if (e.target.className === "fa-regular fa-heart") {
        if (e.target.style.color === "red") {
            e.target.style.color = "white";
        } else {
            e.target.style.color = "red";
        }
    }
})

function favMoviesContainerAdding() {
    let movieCard = document.getElementsByClassName('movie-cards');
    // console.log(typeof movieCard)

    for (const movieFav of movieCard) {
        movieFav.addEventListener("click", (e) => {
            let idOfMovie = (e.target.closest(".movie-cards").getAttribute('id'));
            // console.log(idOfMovie)
            return idOfMovie;
        })
    }
    console.log(movieCard, " movie")
    return movieCard;
}

function moviesData(data) {
    let allMovieDetails = data;
    console.log(allMovieDetails, " clikcing");
    console.log(data);
}



async function videoApi() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQxNzBjNjQ3MjRkMDIyZTkyOTZhNWZhOTg2NDRlYiIsInN1YiI6IjY0OTAyNGE5MjYzNDYyMDBhZTFjZGI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7il3x7f91baELU8ceqe8OYauvsHEJ-lC34vS3Gslqoc'
        }
      };

      fetch('https://api.themoviedb.org/3/movie/575264/videos?language=en-US', options)
        .then(response => response.json())
        .then(data => {
          const videos = data.results;
          console.log(videos);
          videos.map((item, index, array)=> {
            let key = videos[index];
            let youtubeKey = key.key;
            const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeKey}`;            
            console.log(youtubeUrl);
        })
        //   if (videos.length > 0) {
        //     const youtubeKey = videos[0].key;
        //     const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeKey}`;
        //     console.log(youtubeUrl);
        //   } else {
        //     console.log('No videos found.');
        //   }
        })
        // .catch(err => console.error(err));

}

    videoApi();      




    // async function movieFilter() {
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQxNzBjNjQ3MjRkMDIyZTkyOTZhNWZhOTg2NDRlYiIsInN1YiI6IjY0OTAyNGE5MjYzNDYyMDBhZTFjZGI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7il3x7f91baELU8ceqe8OYauvsHEJ-lC34vS3Gslqoc'
//         }
//     };

//     let res = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=${genres_id}`)
//     let response = await res.json();
//     let data = await response;
//     console.log(data)


// }

// movieFilter();


