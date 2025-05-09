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

const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("loginBtn");

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    function isValidEmail(email) {
      const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      return emailRegex.test(email);
    }

    function isStrongPassword(password) {
      // على الأقل: حرف صغير، حرف كبير، رقم، رمز خاص، 8 حروف
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
      return passwordRegex.test(password);
    }

    function validateForm() {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      let valid = true;

      // تحقق من الإيميل
      if (!isValidEmail(email)) {
        emailError.textContent = "أدخل بريد إلكتروني صحيح (مثال: example@domain.com)";
        valid = false;
      } else {
        emailError.textContent = "";
      }

      // تحقق من كلمة المرور
      if (!isStrongPassword(password)) {
        passwordError.textContent = "كلمة المرور يجب أن تكون 8 أحرف على الأقل، وتحتوي على حرف كبير وحرف صغير ورقم ورمز خاص.";
        valid = false;
      } else {
        passwordError.textContent = "";
      }

      loginBtn.disabled = !valid;
    }

    // التحقق أثناء الكتابة
    emailInput.addEventListener("input", validateForm);
    passwordInput.addEventListener("input", validateForm);

    // تنفيذ التحقق عند التحميل
    window.addEventListener("DOMContentLoaded", validateForm);

    // زر الدخول
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("تم تسجيل الدخول بنجاح!");
      window.location.href = "index.html"; // إعادة التوجيه
    });



// ===================
//  التحقق من الاشتراك
// ===================
const subscribeBtn = document.querySelector('.subscribe button');
const subscribeInput = document.querySelector('.subscribe input');

subscribeBtn.addEventListener('click', function (event) {
  const email = subscribeInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    event.preventDefault();
    alert("Please enter your email address.");
  } else if (!emailPattern.test(email)) {
    event.preventDefault();
    alert("Please enter a valid email address.");
  } else {
    alert("You have successfully subscribed.");
    // يمكنك هنا إرسال البيانات إلى السيرفر مثلاً
  }
});
//dark mode
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const logo = document.getElementById("logo");

    // Set initial logo based on saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggle.textContent = "☀️";
        logo.src = "imgs/logo2_dark_mode.png";
    } else {
        logo.src = "imgs/logo2.png";
    }

    // Toggle theme and logo on click
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
 