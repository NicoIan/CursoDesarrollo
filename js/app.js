const menu = document.querySelector(".header__menu");
const openMenuBtn = document.querySelector(".openMenu");
const closeMenuBtn = document.querySelector(".closeMenu");

function toggleMenu(){
    menu.classList.toggle("menu_opened")
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);