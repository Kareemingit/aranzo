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

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const createBtn = document.getElementById("createBtn");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

function validateForm() {
  let valid = true;

  // تحقق من اسم المستخدم
  if (usernameInput.value.trim() === "") {
    usernameError.textContent = "Username is required";
    valid = false;
  } else {
    usernameError.textContent = "";
  }

  // تحقق من الإيميل
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Invalid email format";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // تحقق من كلمة السر
  const password = passwordInput.value.trim();
  if (password === "") {
    passwordError.textContent = "Password is required";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // تحقق من تطابق كلمة السر
  if (password !== confirmPasswordInput.value.trim()) {
    confirmPasswordError.textContent = "Passwords do not match";
    valid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  // تفعيل أو تعطيل زر إنشاء الحساب بناءً على التحقق
  createBtn.disabled = !valid;
}

// رصد التغييرات في الحقول المختلفة
usernameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);
confirmPasswordInput.addEventListener("input", validateForm);

// عند الضغط على الزر، نعرض رسالة نجاح أو نحول المستخدم للصفحة المطلوبة (إذا كانت البيانات صحيحة)
createBtn.addEventListener("click", function(e) {
  e.preventDefault(); // لمنع إعادة تحميل الصفحة
  if (!createBtn.disabled) {
    alert("Account created successfully!"); // رسالة نجاح (ممكن استبدالها بتوجيه للصفحة)
    window.location.href = "index.html"; // توجيه للمستخدم إلى الصفحة الرئيسية بعد النجاح
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
document.addEventListener("DOMContentLoaded" , function(){{
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark"){
      body.classList.add("dark-mode");
      toggle.textContent = "☀️";
  }

  toggle.addEventListener("click" , function (params) {
      body.classList.toggle("dark-mode");

      if(body.classList.contains("dark-mode")){
          localStorage.setItem("theme", "dark");
          toggle.textContent = "☀️";
      } else {
          localStorage.setItem("theme", "light");
          toggle.textContent = "🌙";
      }
  }); 
}});

