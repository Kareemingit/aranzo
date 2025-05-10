document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search");
    const searchField = document.getElementById("Search-Field");
    const myXicon = document.getElementById("rem-input-field");

    if (searchIcon && searchField && myXicon) {
        searchIcon.onclick = function (event) {
            event.preventDefault();
            searchField.style.display = "block";
        };

        myXicon.onclick = function (event) {
            event.preventDefault();
            searchField.style.display = "none";
        };
    }

    const navToggleBtn = document.querySelector(".phone-nav");
    const navMenu = document.querySelector(".parent-ul");

    if (navToggleBtn && navMenu) {
        navToggleBtn.addEventListener("click", function () {
            if (window.innerWidth <= 991) {
                navMenu.style.display = (navMenu.style.display === "block") ? "none" : "block";
            }
        });

        window.addEventListener("resize", function () {
            navMenu.style.display = (window.innerWidth > 991) ? "flex" : "none";
        });
    }

    const toggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const logo = document.getElementById("logo");

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggle.textContent = "☀️";
        logo.src = "imgs/logo2_dark_mode.png";
    } else {
        logo.src = "imgs/logo2.png";
    }

    toggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggle.textContent = "☀️";
            logo.src = "imgs/logo2_dark_mode.png";
        } else {
            localStorage.setItem("theme", "light");
            toggle.textContent = "🌙";
            logo.src = "imgs/logo2.png";
        }
    });

    const toggleBtn = document.querySelector(".toggle-sidebar-btn");
    const sidebar = document.querySelector(".sidebar");

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", function () {
            sidebar.classList.toggle("active");
        });

        sidebar.addEventListener("click", function (event) {
            if (event.target === sidebar) {
                sidebar.classList.remove("active");
            }
        });
    }

    const row = document.getElementById("productRow");
    if (row) {
        window.nextSlide = function () {
            const firstItem = row.children[0];
            row.appendChild(firstItem.cloneNode(true));
            row.removeChild(firstItem);
        };

        window.prevSlide = function () {
            const lastItem = row.children[row.children.length - 1];
            row.insertBefore(lastItem.cloneNode(true), row.children[0]);
            row.removeChild(row.children[row.children.length - 1]);
        };
    }
});
