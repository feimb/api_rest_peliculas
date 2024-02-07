const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:{
        "Content-Type": "application/json;charset=utf-8"
    },
    params:{
        "api_key": API_KEY
    },
});


const urlImage = "https://image.tmdb.org/t/p/w400"


// Utils
function createMovies(movies, container){
    container.innerHTML = " ";
    movies.forEach(movie => {
        const movieContainer = document.createElement("div");
        movieContainer.classList.add("movie-container");        
        movieContainer.addEventListener("click",() => {
            location.hash = "#movie="
        })

        const movieImg = document.createElement("img");
        movieImg.classList ="movie-img";
        movieImg.setAttribute("alt", movie.title);
        movieImg.setAttribute(
            "src",
            urlImage +  movie.backdrop_path,
        )

        movieContainer.appendChild(movieImg);
       
        container.append(movieContainer);
    });
};
function createCategories(categories, container){
    container.innerHTML = " "
    categories.forEach(category => {
        const div = document.createElement("div");
        div.className = "category-container";

        const h3 = document.createElement("h3");
        h3.textContent = category.name;
        h3.setAttribute("id", "id" + category.id);
        h3.addEventListener("click", () =>{
            location.hash = `#category=${category.id}-${category.name}`;
        })
        h3.className = "category-title";

        div.appendChild(h3);    
        container.appendChild(div);
    })
}
// call api 
async function getTrending(){
    const { data } = await api("trending/all/day");

    const movies = data.results;
    createMovies(movies, trendingMoviesPreviewList);
}
async function getCategorie(){
    const { data } = await api("genre/movie/list");
  
    const genre = data.genres;
    createCategories(genre, categoriesPreviewList)
    // categoriesPreviewList.innerHTML = " "
    // genre.forEach(category => {
    //     const div = document.createElement("div");
    //     div.className = "category-container";

    //     const h3 = document.createElement("h3");
    //     h3.textContent = category.name;
    //     h3.setAttribute("id", "id" + category.id);
    //     h3.addEventListener("click", () =>{
    //         location.hash = `#category=${category.id}-${category.name}`;
    //     })
    //     h3.className = "category-title";

    //     div.appendChild(h3);    
    //     categoriesPreviewList.appendChild(div);
    // })

}
async function getMoviebyCategory(id){
    const { data } = await api("discover/movie",{
        params:{
            with_genres: id
        },
    });

    const movies = data.results;
    console.log(movies);
    createMovies(movies, genericSection);
    // genericSection.innerHTML = " "
    // movies.forEach(movie => {
    //     const container = document.createElement("div");
    //     container.classList.add("movie-container");        

    //     const movieImg = document.createElement("img");
    //     movieImg.classList ="movie-img";
    //     movieImg.setAttribute("alt", movie.title);
    //     movieImg.setAttribute(
    //         "src",
    //         urlImage +  movie.backdrop_path,
    //     )

    //     container.appendChild(movieImg);
    //     genericSection.append(container);
    // });
}

async function getMovieBySearch(query){
    const { data } = await api("search/movie",{
        params:{
            query,
        },
    });

    const movies = data.results;
    console.log(movies);
    createMovies(movies, genericSection);
}
async function getTrendingMovie(){
    const { data } = await api("trending/all/day");

    const movies = data.results;
    createMovies(movies, genericSection);
}