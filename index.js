'use strict';

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navBar = document.querySelector("[data-navbar]");
const oveerlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, oveerlay];

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
        navBar.classList.toggle("active");
        oveerlay.classList.toggle("active");
        document.body.classList.toggle("active");
    })
}

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
    window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");
})

// go to top

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active")
})


//Fetching Data

//Upcoming movies
fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=56a546836d8b52c7e7cdc77d062ed8c7&language=en-US&page=1')
    .then(response => response.json())
    .then(json => {
        let moviesList = document.querySelectorAll(".movies-list");
        let originalContent = `
        <div class="movie-card">
        
        <figure class="card-banner">
        <div class="details-card">Adi</div>
        
            <img src="AA" alt="AltA">
        </figure>

        <div class="title-wrapper">
                <h3 class="card-title">titleA</h3>
            <time datetime="2022">2022A</time>
            </div>
            
            <div class="card-meta">
            <div class="badge badge-outline">HD</div>
            <div class="duration">
            <span>lang:</span> langA
            
            </div>
            <div class="rating">
            <ion-icon name="star"></ion-icon>
            <data>8.5A</data>
            </div>
            </div>
            </div>
                        `;
        for (let i = 0; i < 12; i++) {
            let myLi = document.createElement("li");
            let customizeContent = originalContent;
            customizeContent = customizeContent.replace("AA", `https://image.tmdb.org/t/p/original${json.results[i].backdrop_path}`);
            customizeContent = customizeContent.replace("titleA", json.results[i].title);
            customizeContent = customizeContent.replace("2022A", json.results[i].release_date.split("-")[0]);
            customizeContent = customizeContent.replace("8.5A", json.results[i].vote_average);
            customizeContent = customizeContent.replace("langA", json.results[i].original_language);
            customizeContent = customizeContent.replace("AltA", `${json.results[i].title} movie`);
            customizeContent = customizeContent.replace("Adi", json.results[i].overview);
            myLi.innerHTML = customizeContent;
            moviesList[0].appendChild(myLi);
        }
    })

//Top Rated
fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=56a546836d8b52c7e7cdc77d062ed8c7&language=en-US&page=1')
    .then(response => response.json())
    .then(json => {
        let moviesList = document.querySelectorAll(".movies-list");
        let originalContent = `
                <div class="movie-card">
                        <figure class="card-banner">
                        <div class="details-card">Adi</div>
                            <img src="AA" alt="AltA">
                        </figure>
                    <div class="title-wrapper">
                            <h3 class="card-title">titleA</h3>
                        <time datetime="2022">2022A</time>
                        </div>
                        
                        <div class="card-meta">
                        <div class="badge badge-outline">HD</div>
                        <div class="duration">
                        <span>lang:</span> langA
                        
                        </div>
                        <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>8.5A</data>
                        </div>
                        </div>
                        </div>
                        `;
        for (let i = 0; i < 12; i++) {
            let myLi = document.createElement("li");
            let customizeContent = originalContent;
            customizeContent = customizeContent.replace("AA", `https://image.tmdb.org/t/p/original${json.results[i].backdrop_path}`);
            customizeContent = customizeContent.replace("titleA", json.results[i].title);
            customizeContent = customizeContent.replace("2022A", json.results[i].release_date.split("-")[0]);
            customizeContent = customizeContent.replace("8.5A", json.results[i].vote_average);
            customizeContent = customizeContent.replace("langA", json.results[i].original_language);
            customizeContent = customizeContent.replace("AltA", `${json.results[i].name} movie`);
            customizeContent = customizeContent.replace("Adi", json.results[i].overview);
            myLi.innerHTML = customizeContent;
            moviesList[1].appendChild(myLi);
            console.log();
        }
    })
//TV Show
fetch('https://api.themoviedb.org/3/tv/popular?api_key=56a546836d8b52c7e7cdc77d062ed8c7&language=en-US&page=1')
    .then(response => response.json())
    .then(json => {
        let moviesList = document.querySelectorAll(".movies-list");
        let originalContent = `
                <div class="movie-card">
                        <figure class="card-banner">
                        <div class="details-card">Adi</div>
                            <img src="AA" alt="AltA">
                        </figure>
                    <div class="title-wrapper">
                            <h3 class="card-title">titleA</h3>
                        <time datetime="2022">2022A</time>
                        </div>
                        
                        <div class="card-meta">
                        <div class="badge badge-outline">HD</div>
                        <div class="duration">
                        <span>lang:</span> langA
                        
                        </div>
                        <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>8.5A</data>
                        </div>
                        </div>
                        </div>
                        `;
        for (let i = 0; i < 12; i++) {
            let myLi = document.createElement("li");
            let customizeContent = originalContent;
            customizeContent = customizeContent.replace("AA", `https://image.tmdb.org/t/p/original${json.results[i].backdrop_path}`);
            customizeContent = customizeContent.replace("titleA", json.results[i].name);
            customizeContent = customizeContent.replace("2022A", json.results[i].first_air_date);
            customizeContent = customizeContent.replace("8.5A", json.results[i].vote_average);
            customizeContent = customizeContent.replace("langA", json.results[i].original_language);
            customizeContent = customizeContent.replace("AltA", `${json.results[i].name} movie`);
            customizeContent = customizeContent.replace("Adi", json.results[i].overview);
            myLi.innerHTML = customizeContent;
            moviesList[2].appendChild(myLi);
        }
    })

//Top Rated Button
let popularr = document.getElementById("popularFilter");
let topp = document.getElementById("topRatedFilter");
topp.onclick = function () {
    popularr.classList.remove("focused");
    let container = document.querySelectorAll(".movies-list");
    container[2].parentNode.removeChild(container[2]);
    fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=56a546836d8b52c7e7cdc77d062ed8c7&language=en-US&page=1')
        .then(response => response.json())
        .then(json => {
            let originalContent = `
        <div class="movie-card">
                <figure class="card-banner">
                <div class="details-card">Adi</div>
                    <img src="AA" alt="AltA">
                </figure>
            <div class="title-wrapper">
                    <h3 class="card-title">titleA</h3>
                <time datetime="2022">2022A</time>
                </div>
                
                <div class="card-meta">
                <div class="badge badge-outline">HD</div>
                <div class="duration">
                <span>lang:</span> langA
                
                </div>
                <div class="rating">
                <ion-icon name="star"></ion-icon>
                <data>8.5A</data>
                </div>
                </div>
                </div>
                `;
            let sectionOfTopRated = document.getElementById("tvShows");
            let ulTopRated = document.createElement("ul");
            sectionOfTopRated.appendChild(ulTopRated);
            ulTopRated.className = 'movies-list';
            for (let i = 0; i < 12; i++) {
                let myLi = document.createElement("li");
                let customizeContent = originalContent;
                customizeContent = customizeContent.replace("AA", `https://image.tmdb.org/t/p/original${json.results[i].backdrop_path}`);
                customizeContent = customizeContent.replace("titleA", json.results[i].name);
                customizeContent = customizeContent.replace("2022A", json.results[i].first_air_date.split("-")[0]);
                customizeContent = customizeContent.replace("8.5A", json.results[i].vote_average);
                customizeContent = customizeContent.replace("langA", json.results[i].original_language);
                customizeContent = customizeContent.replace("AltA", `${json.results[i].name} movie`);
                customizeContent = customizeContent.replace("Adi", json.results[i].overview);
                myLi.innerHTML = customizeContent;
                ulTopRated.appendChild(myLi);
            }
        })
}


//Popular Button
popularr.onclick = function () {
    let container = document.querySelectorAll(".movies-list");
    container[2].parentNode.removeChild(container[2]);
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=56a546836d8b52c7e7cdc77d062ed8c7&language=en-US&page=1')
        .then(response => response.json())
        .then(json => {
            let originalContent = `
        <div class="movie-card">
                <figure class="card-banner">
                <div class="details-card">Adi</div>
                    <img src="AA" alt="AltA">
                </figure>
            <div class="title-wrapper">
                <h3 class="card-title">titleA</h3>
                <time datetime="2022">2022A</time>
                </div>
                
                <div class="card-meta">
                <div class="badge badge-outline">HD</div>
                <div class="duration">
                <span>lang:</span> langA
                
                </div>
                <div class="rating">
                <ion-icon name="star"></ion-icon>
                <data>8.5A</data>
                </div>
                </div>
                </div>
                `;
            let sectionOfTopRated = document.getElementById("tvShows");
            let ulTopRated = document.createElement("ul");
            sectionOfTopRated.appendChild(ulTopRated);
            ulTopRated.className = 'movies-list';
            for (let i = 0; i < 12; i++) {
                let myLi = document.createElement("li");
                let customizeContent = originalContent;
                customizeContent = customizeContent.replace("AA", `https://image.tmdb.org/t/p/original${json.results[i].backdrop_path}`);
                customizeContent = customizeContent.replace("titleA", json.results[i].name);
                customizeContent = customizeContent.replace("2022A", json.results[i].first_air_date.split("-")[0]);
                customizeContent = customizeContent.replace("8.5A", json.results[i].vote_average);
                customizeContent = customizeContent.replace("langA", json.results[i].original_language);
                customizeContent = customizeContent.replace("AltA", `${json.results[i].name} movie`);
                customizeContent = customizeContent.replace("Adi", json.results[i].overview);
                myLi.innerHTML = customizeContent;
                ulTopRated.appendChild(myLi);
            }
        })
}

window.onload = function () {
    popularr.classList.add("focused");
}

document.body.addEventListener("click", function (e) {
    e.target.querySelector(".details-card").classList.toggle("active");
});
