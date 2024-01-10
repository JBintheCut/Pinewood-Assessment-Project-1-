const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const basketButton = document.getElementById("basket-btn");
const addedPopup = document.getElementById("added");

basketButton.addEventListener("click", popup);

function popup() {
  addedPopup.classList.add("active");
}
