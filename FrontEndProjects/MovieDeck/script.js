let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let current = document.getElementById('current');


async function callApi(page) {
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQxNzBjNjQ3MjRkMDIyZTkyOTZhNWZhOTg2NDRlYiIsInN1YiI6IjY0OTAyNGE5MjYzNDYyMDBhZTFjZGI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7il3x7f91baELU8ceqe8OYauvsHEJ-lC34vS3Gslqoc'
        }
    };

    let filmObj = await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}`, options)   
    let response = await filmObj.json();
    console.log(response, " first api");
    return response;
}

let page = 1;

pageControl(page);

async function renderingPage(page) {
    let filmDetail = await callApi(page);
    let films = await filmDetail.results;
    
    films.forEach((item)=> {
        let {poster_path, name, vote_average, vote_count} = item;   // Destructuring assignment       
        document.querySelector('.movie-card-container').innerHTML += 
        `<div class="movie-cards">
            <div class="poster">
                <img class="poster-size" src="https://image.tmdb.org/t/p/original${poster_path}" alt="movie-image">
                <div class="heart-icon">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div class="name-vote-sorting">
                <div class="movie-title">
                    ${name}
                </div>
                <div class="movie-vote">
                    Votes: ${vote_count}
                    <br>
                    Rating: ${vote_average}
                </div>
            </div>
        </div>`
    })
    if (page === 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }
    let total = filmDetail.total_pages;
    if (page === total) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }

    current.innerHTML = `Current Page : ${page}`;
}


function pageControl(page) {    
    document.querySelector('.movie-card-container').innerHTML = "";
    renderingPage(page);    
}

nextBtn.onclick = function() {
    page++;   
    pageControl(page);
    
}
prevBtn.onclick = function() {
    if (page > 1) {
        page--;   
        pageControl(page);
    }
}


let searchBox = document.getElementById('movie-search-box');
let searchBtn = document.getElementById('movie-search-btn');

searchBtn.addEventListener('click', ()=> {
    let movieSearch = searchBox.value;
    // console.log(movieSearch);
    // console.dir(searchBox.value);
    searchBox.value = "";

    searchingFilms(movieSearch);
})


async function searchingFilms(movieName) {
    try {
        let fetchLink = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=494170c64724d022e9296a5fa98644eb`);
            let response = await fetchLink.json();
            let searchResults = await response.results;
        console.log(response)
        // console.dir(searchResults)
        document.querySelector('.movie-card-container').innerHTML = ""
        
        searchResults.forEach((item)=> {
            
            if (item.poster_path) {

                let poster = item.poster_path;
                let title = item.title;
                let voteCount = item.vote_count;
                let voteRate = item.vote_average;
                
    
                
                document.querySelector('.movie-card-container').innerHTML += 
                `<div class="movie-cards">
                    <div class="poster">
                        <img class="poster-size" src="https://image.tmdb.org/t/p/original${poster}" onerror="this.src = 'https://image.tmdb.org/t/p/original/pPB609vfOSIn4bFceyErf03mUFK.jpg'" alt="movie-image">
                        <div class="heart-icon">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                    <div class="name-vote-sorting">
                        <div class="movie-title">
                            ${title}
                        </div>
                        <div class="movie-vote">
                            Votes: ${voteCount}
                            <br>
                            Rating: ${voteRate}
                        </div>
                    </div>
                </div>`
            }
            
        })

    } catch (error) {
        console.log(error)
    }
}


