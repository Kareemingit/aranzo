document.addEventListener("DOMContentLoaded", function () {
    let searchIcon = document.getElementById("search");
    let searchField = document.getElementById("Search-Field");

    let myXicon = document.getElementById("rem-input-field");

    searchIcon.onclick = function (event) {
        event.preventDefault();
        searchField.style.display = "block";
    };

    myXicon.onclick = function(event){
        event.preventDefault();
        searchField.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navToggleBtn = document.querySelector(".phone-nav");
    const navMenu = document.querySelector(".parent-ul");

    navToggleBtn.addEventListener("click", function () {
        if (window.innerWidth <= 991) {
            if (navMenu.style.display === "block") {
                navMenu.style.display = "none";
            } else {
                navMenu.style.display = "block";
            }
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 991) {
            navMenu.style.display = "flex";
        } else {
            navMenu.style.display = "none";
        }
    });
});
