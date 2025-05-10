document.addEventListener("DOMContentLoaded", function () {
    // search field
    const searchIcon = document.getElementById("search");
    const searchField = document.getElementById("Search-Field");
    const myXicon = document.getElementById("rem-input-field");

    searchIcon.onclick = function (event) {
        event.preventDefault();
        searchField.style.display = "block";
    };
    myXicon.onclick = function(event){
        event.preventDefault();
        searchField.style.display = "none";
    };

    // navbar for small screens 
    const navToggleBtn = document.querySelector(".phone-nav");
    const navMenu = document.querySelector(".parent-ul");

    navToggleBtn.addEventListener("click", function () {
        if (window.innerWidth <= 991) {
            navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
        }
    });

    window.addEventListener("resize", function () {
        navMenu.style.display = window.innerWidth > 991 ? "flex" : "none";
    });

    // dark mode toggle
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

// update and add the total for every product alone
function updateTotal(input) {
    const row = input.closest("tr");
    const priceText = row.children[1].textContent.trim().replace(" EGP", "").replace(",", "");
    const quantity = parseInt(input.value);
    const total = priceText * quantity;

    row.querySelector(".total-cell").textContent = new Intl.NumberFormat().format(total) + " EGP";

    updateGrandTotal();
}

// update the grand total
function updateGrandTotal() {
    let total = 0;
    document.querySelectorAll(".total-cell").forEach(cell => {
        const amount = parseFloat(cell.textContent.replace(" EGP", "").replace(/,/g, ""));
        total += amount;
    });
    document.getElementById("grand-total").textContent = "Grand Total: " + new Intl.NumberFormat().format(total) + " EGP";
}

// the submit message
document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitOrderBtn");
    const message = document.getElementById("order-message");

    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const grandTotalText = document.getElementById("grand-total").textContent;
        const totalValue = parseFloat(grandTotalText.replace("Grand Total: ", "").replace(" EGP", "").replace(/,/g, ""));

        if (isNaN(totalValue) || totalValue === 0) {
            message.textContent = "Your cart is empty. Please add items before submitting.";
            message.style.color = "red";
        } else {
            message.textContent = "Order Submitted! Thank you for ordering from our website!";
            message.style.color = "green";

            setTimeout(() => window.location.href = 'index.html', 2500);
        }
    });
});
