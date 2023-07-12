const basePath = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
let cardResults;
let page = 1;

let btnPrev = document.getElementById("prev");
let btnCurrent = document.getElementById("current");
let btnNext = document.getElementById("next");



btnPrev.addEventListener('click', () => {
  if (page === 1) {
    btnPrev.disabled = true;
  } else {
    btnPrev.disabled = false;
    page--;
  }
  btnCurrent.innerHTML = page;
})

btnNext.addEventListener('click', () => {
  console.log("hai")

  page = page + 1;
  btnCurrent.innerHTML = page;
  btnPrevPage(page)
  getNowplayingMovies(page)
})


//-----------------Nowplaying---------
function getNowplayingMovies(page) {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWRhNmNlYzRjMGIyZTllNWYzMjJjNTA3Yjk3MjU3YyIsInN1YiI6IjY0YTU1OWM3ZGExMGYwMDEzOTdjNjM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lJGjYugk9yrfEfE8Hw9jKed4GdMvcEuzUjo4gjyTGF4'
    }
  };


  fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      console.log(response.total_pages)
      rendingCard(response.results);
      cardResults = response.results;
    })


    .catch(err => console.error(err));
}


getNowplayingMovies();

//-----------------------displaycards function-----

function rendingCard(results) {
  let cardDisplay = "";
  document.getElementById("movie-details").innerHTML = "";
  results.map((d) => {

    cardDisplay += ` <div class="card" style="background-color:beige" onclick="ShowMovie(this)">
    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${d.poster_path}" class="card-image">
    <h3 class="card-title">${d.title}</h3>
      <div class="card-details">
          <div class="card-detail-lang">${d.original_language}</div>
          <div class="card-detail-rating">${d.vote_average}</div>
      </div>
    </div>`;
  })
  document.getElementById("movie-details").innerHTML = cardDisplay;
}




//-------------------geners-------------------
function getGenersFilter() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWRhNmNlYzRjMGIyZTllNWYzMjJjNTA3Yjk3MjU3YyIsInN1YiI6IjY0YTU1OWM3ZGExMGYwMDEzOTdjNjM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lJGjYugk9yrfEfE8Hw9jKed4GdMvcEuzUjo4gjyTGF4'
    }
  };

  fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response.genres)

    })
    .catch(err => console.error(err));
}
getGenersFilter();

function filterMovie(e) {
  console.log(cardResults);
  console.log(e.target.dataset.genereid)
  let id = e.target.dataset.genereid;
  //console.log(e.target.getAttribute("data-genereid"))
  const updateResults = cardResults.filter((d) => {
    console.log(d.genre_ids.includes(Number(id)));
    return d.genre_ids.includes(Number(id));

  })
  rendingCard(updateResults);
  console.log(updateResults);

  //console.log(e.innerHTML.toLowerCase());
}
// filterMovie();
// function filterMovie(results)
// {
//  console.log(results,"hello"); 
//  results.forEach(element => {
//   const updateResults=element.filter((d)=>{
//     return d.id.includes(id);
//    })
//    rendingCard(updateResults);
//  });
// }

// function filterMovie(id)
// {
//  console.log(id,cardResults); 
//  const updateResults=cardResults.filter((d)=>{
//   return d.genre_ids.includes(id);
//  })
//  rendingCard(updateResults);
// }
// function filterMovie(name)
// {
//  console.log(id,response.genres); 
//  const updateResults=response.genres.filter((d)=>{
//   return d.name.includes(name);
//  })
//  rendingCard(updateResults);
// }


//-------------------------search --------------------------
const submitBtn = document.getElementById("submit");
const searchInput = document.getElementById("search");
submitBtn.addEventListener('click', () => {
  let getSearchValue = searchInput.value.toLowerCase();
  searchMovie(getSearchValue)
})

function searchMovie(movie) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWRhNmNlYzRjMGIyZTllNWYzMjJjNTA3Yjk3MjU3YyIsInN1YiI6IjY0YTU1OWM3ZGExMGYwMDEzOTdjNjM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lJGjYugk9yrfEfE8Hw9jKed4GdMvcEuzUjo4gjyTGF4'
    }
  };

  fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=494170c64724d022e9296a5fa98644eb`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response, "search")
      // let results=response;
      // const cardResultsTitle=cardResults;
      // console.log(cardResultsTitle)
      // const updateResults=cardResults.filter((d)=>{
      //   console.log(d.title.toLowerCase().includes(results))

      //    return d.title.toLowerCase().includes(results);
      // });
      rendingCard(response.results)
    })
    .catch(err => console.error(err));
}
// searchMovie();

// -----------My coding----------
// submitBtn.addEventListener('click',()=>{
// const getSearchValue=searchInput.value.toLowerCase();
// console.log(getSearchValue)
// // console.log(cardResults[0].title.toLowerCase())


// const cardResultsTitle=cardResults;
// console.log(cardResultsTitle)
// const updateResults=cardResults.filter((d)=>{
//  // console.log(d.title.toLowerCase().includes(getSearchValue))

//    return d.title.toLowerCase().includes(getSearchValue);
// });
// rendingCard(updateResults)
//    })




// let filteredSearch=cardResults.filter(()=>{
//   for(let i=0;i<cardResults.length;i++)
//   {
//   if(cardResults[i].title.toLowerCase()===getSearchValue){
//   console.log("true");
//   }
//   }

// });
// console.log(filteredSearch)

