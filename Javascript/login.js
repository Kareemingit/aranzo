

 
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// دوال التحقق من صحة البيانات
function isValidEmail(email) {
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return emailRegex.test(email);
}

function isStrongPassword(password) {
  // حرف صغير، حرف كبير، رقم، رمز خاص، على الأقل 8 أحرف
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
}

// التحقق من صحة الحقول وتحديث الرسائل
function validateForm() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  let valid = true;

  // التحقق من الإيميل
  if (!isValidEmail(email)) {
    emailError.textContent = "Please enter a valid email (e.g., example@domain.com)";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // التحقق من كلمة المرور
  if (!isStrongPassword(password)) {
    passwordError.textContent = "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // تفعيل أو تعطيل زر الدخول
  loginBtn.disabled = !valid;
}

// التحقق أثناء الكتابة
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

// زر الدخول
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Login successful!");
  window.location.href = "index.html"; // إعادة التوجيه بعد تسجيل الدخول
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







