

function movieapi(page) {
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQxNzBjNjQ3MjRkMDIyZTkyOTZhNWZhOTg2NDRlYiIsInN1YiI6IjY0OTAyNGE5MjYzNDYyMDBhZTFjZGI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7il3x7f91baELU8ceqe8OYauvsHEJ-lC34vS3Gslqoc'
        }
    };
    
    fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}`, options)   
        .then((response)=> {
            return response.json();
        })
        .then((data)=> {
            console.log(data)
            let filmDetail = data.results;
            document.querySelector('.movie-card-container').innerHTML = ""
            
            if (page === 1) {
                document.getElementById('prev').disabled = true;
            } else {
                document.getElementById('prev').disabled = false;
            }
            if (page === data.total_pages) {
                document.getElementById('next').disabled = true;
            } else {
                document.getElementById('next').disabled = false;
            }
            document.getElementById('next').onclick = function() {
                page++;
                movieapi(page);
                document.getElementById('current').innerHTML = `Current Page : ${page}`;
            }
            
            if (page > 1) {
                document.getElementById('prev').onclick = function() {    
                    page--;
                    movieapi(page);
                    document.getElementById('current').innerHTML = `Current Page : ${page}`;
                }
            } 


            filmDetail.forEach((item)=> {
                let {poster_path, name, vote_average, vote_count} = item; 
                
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
        })
        .catch(err => console.error(err));



}
let page = 1;
movieapi(page);