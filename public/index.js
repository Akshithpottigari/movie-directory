fetch('movies.json')
.then(response => response.json())
.then(data => {
    // console.log(data[0].title)
    // document.querySelector("#demo").innerHTML = data.id;
    for (let i = 0; i < data.length; i++){
        // console.log(data[i].title)
        document.querySelector("#movie-container").innerHTML += `
        <div id="movie">
            <img class = "poster" src="${data[i].posterurl}" alt="poster url">
            <div id="id">
                Id : ${data[i].id}
            </div>
            <div id = "movie-title">
                Title : ${data[i].title}
            </div>
            <div id = "movie-poster">
            </div>
            <div id = "movie-year">
                Year: ${data[i].year}
            </div>
            <div id = "movie-genres">
                Genres ${data[i].genres}
            </div>
            <div id = "movie-actors">
                Actors ${data[i].actors}
            </div>
            <div id = "movie-releaseDate">
                Release Date :  ${data[i].releaseDate}
            </div>
        </div>
        `;


    }
})