let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let current = document.getElementById('current');


async function callApi() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQxNzBjNjQ3MjRkMDIyZTkyOTZhNWZhOTg2NDRlYiIsInN1YiI6IjY0OTAyNGE5MjYzNDYyMDBhZTFjZGI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7il3x7f91baELU8ceqe8OYauvsHEJ-lC34vS3Gslqoc'
        }
    };
      
    let filmObj = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, options)
    let response = await filmObj.json();
    return response;
}

let page = 1;

pageControl(page);

async function renderingPage() {
    let filmDetail = await callApi();
    console.log(filmDetail)
    let films = await filmDetail.results;
    
    films.forEach((item)=> {
        let {poster_path, title, vote_average, vote_count, overview} = item;   // Destructuring assignment       
        
        
        document.querySelector('.movie-card-container').innerHTML += 
        `<div class="movie-cards">
            <div class="overview active">
                <div class="plot"> PLOT </div>  
                ${overview}
            </div>
            <div class="poster">
                <img class="poster-size" src="https://image.tmdb.org/t/p/original${poster_path}" alt="movie-image">
                <div class="heart-icon">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div class="name-vote-sorting">
                <div class="movie-title">
                    ${title}
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


async function movieTest() {

    let fetchLink = await fetch(`https://api.themoviedb.org/3/search/movie?query="Breaking+Bad"&api_key=494170c64724d022e9296a5fa98644eb`);
    let test = await fetchLink.json();

    let testing = test.results;
    testing.forEach((item)=> {
        console.log(item.title)
    })
}