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
  
  
  