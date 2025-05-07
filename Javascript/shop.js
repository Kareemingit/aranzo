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

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".toggle-sidebar-btn");
    const sidebar = document.querySelector(".sidebar");

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        sidebar.addEventListener("click", function(event) {
          if (event.target === sidebar) {
            sidebar.classList.remove("active");
          }
        });
      });
    }
});

const row = document.getElementById("productRow");
  const items = row.children;
  let startIndex = 0;

function nextSlide() {
    const firstItem = row.children[0];
    row.appendChild(firstItem.cloneNode(true));
    row.removeChild(firstItem);
}

function prevSlide() {
    const lastItem = row.children[row.children.length - 1];
    row.insertBefore(lastItem.cloneNode(true), row.children[0]); 
    row.removeChild(row.children[row.children.length - 1]); 
}