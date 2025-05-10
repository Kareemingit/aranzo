// start header
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

document.querySelector('.search-button').addEventListener('click', function(event) {
    const searchInput = document.querySelector('input[type="text"]');
    const keyword = searchInput.value.trim();

    if (keyword === "") {
      event.preventDefault(); // يمنع فتح صفحة shop.html
      alert("من فضلك أدخل كلمة للبحث.");
    } else {
      // هنا ممكن تكملي أي عمليات بحث إضافية
      // alert("جاري البحث عن: " + keyword);
    }
  });



document.querySelector('.subscribe button').addEventListener('click', function(event) {
    const emailInput = document.querySelector('.subscribe input');
    const email = emailInput.value.trim();

    // تعبير منتظم لصيغة الإيميل
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      event.preventDefault();
      alert("please enter a correct email addres.");
    } else if (!emailPattern.test(email)) {
      event.preventDefault();
      alert("please enter a correct email address");
    } else {
      alert("you have successfully subscribed.");
      // هنا ممكن تضيفي كود إرسال البيانات لو عايزة
    }
  });
  
  
//dark mode

document.addEventListener("DOMContentLoaded", function () {
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
});