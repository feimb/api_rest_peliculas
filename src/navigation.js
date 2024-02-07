searchFormBtn.addEventListener("click", () =>{
    location.hash = "#search=" + searchFormInput.value;
})
trendingBtn.addEventListener("click", () =>{
    location.hash = "#trends"
})
arrowBtn.addEventListener("click", () =>{
    history.back()
})


window.addEventListener("DOMContentLoaded", navigation, false);
window.addEventListener("hashchange", navigation, false);


function navigation(){

    console.log({ location })
    if (location.hash.startsWith("#trends")){
        trendsPage();
    }else if(location.hash.startsWith("#search=")){
        searchPage();
    }else if(location.hash.startsWith("#movie=")){
        moviePage();
    }else if(location.hash.startsWith("#category=")){
        categoriesPage();
    }else{
        homePage();
    }
    window.scrollTo(0,0)
}
navigation()

function trendsPage(){
    headerSection.classList.remove("header-container--long");
    headerSection.style.background = " ";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive")
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.add("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");

    headerCategoryTitle.textContent = "Tendencias";
    getTrendingMovie();
}

function searchPage(){

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = " ";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive")
    headerCategoryTitle.classList.add("inactive");
    searchForm.classList.remove("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");

    const [_, query] = location.hash.split("=") //()=> [#categories=], [12345-romance]
    getMovieBySearch(query);
}

function moviePage(){
    console.log("MOVIE!!");

    headerSection.classList.add("header-container--long");
    // headerSection.style.background = " ";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.add("header-arrow--white");
    headerTitle.classList.add("inactive")
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.add("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericSection.classList.add("inactive");
    movieDetailSection.classList.remove("inactive");

}
function categoriesPage(){
    console.log("categories!!");

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = " ";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive")
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.add("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");

    const [_, categoryData] = location.hash.split("=") //()=> [#categories=], [12345-romance]
    const [categoryId, categoryName] = categoryData.split("-")
    
    headerCategoryTitle.innerHTML = categoryName.replace("%20", " ");

    getMoviebyCategory(categoryId)
    
}
function homePage(){
    console.log("home"); 

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    headerTitle.classList.remove("inactive");
    arrowBtn.classList.add("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerCategoryTitle.classList.add("inactive");
    searchForm.classList.remove("inactive");    
   

    trendingPreviewSection.classList.remove("inactive");
    categoriesPreviewSection.classList.remove("inactive");
    genericSection.classList.add("inactive");
    movieDetailSection.classList.add("inactive");

    getTrending();
    getCategorie(); 
   
}
