fetch("movies.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data[0].title)
    // document.querySelector("#demo").innerHTML = data.id;
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i].title)
      document.querySelector(".container").innerHTML += `
      <div class="movie" style="background-image: url(${data[i].posterurl})">
      <div class="movie-overlay">
          <div class="text-wrapper">

              <div class="movie-title">${data[i].title}</div>
          </div>
      </div>
    </div>
        `;
    }
  });
