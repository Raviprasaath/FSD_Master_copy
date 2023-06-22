fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f1a87d30ad8792e0dd1c12ce07d37337&language=en-US&page=1')
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
        let movieDetail = (data.results);
        
        let moviesort = document.getElementById('sort')
        let sortedFilm = ascending(movieDetail);
        showCart(sortedFilm);
        moviesort.addEventListener('change', (e)=> {
            if (e.target.value === 'desc') {
                let sortedFilm = descending(movieDetail);
                showCart(sortedFilm);                
            } else {
                let sortedFilm = ascending(movieDetail);
                showCart(sortedFilm);
            }
        })
        function ascending(film) {
            return film.sort((a, b) => {
                return a.release_date.substring(0, 4) - b.release_date.substring(0, 4);
            });

        }
        function descending(film) {
            return film.sort((a, b) => {
                return b.release_date.substring(0, 4) - a.release_date.substring(0, 4);
            });
        }

        function showCart(array) {
            document.getElementById('movies').innerHTML = "";
            array.forEach((item) => {
                document.getElementById('movies').innerHTML += 
                `<div class="movie">
                <img class="poster" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.title}">
                <div>
                <h2 class="movie-title">${item.title}</h2>
                <p class="release-year">${item.release_date.substring(0, 4)}</p>
                <p class="movie-overview">${item.overview}</p>
                </div>
                </div>` 
            })
        }
})