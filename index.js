'use strict';

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navBar = document.querySelector("[data-navbar]");
const oveerlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn,navCloseBtn,oveerlay];

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function (){
        navBar.classList.toggle("active");
        oveerlay.classList.toggle("active");
        document.body.classList.toggle("active");
    })
}


const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
    window.scrollY >=  10 ? header.classList.add("active") : header.classList.remove("active");
})


