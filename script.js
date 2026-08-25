// ================= CART =================

let cartCount = 0;

function addToCart(productName) {

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert(productName + " added to cart!");

}


// ================= HEART =================

function toggleHeart(button) {

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
        button.textContent = "♥";
    } else {
        button.textContent = "♡";
    }

}


// ================= MOBILE MENU =================

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");

}


// ================= SEARCH =================

function searchProducts() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const productName =
            product
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (productName.includes(input)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// ================= ENTER SEARCH =================

document
.getElementById("searchInput")
.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {

        searchProducts();

    }

});


// ================= NEWSLETTER =================

function subscribe(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    alert(
        "Thank you! " +
        email +
        " has been subscribed."
    );

    document.getElementById("email").value = "";

}