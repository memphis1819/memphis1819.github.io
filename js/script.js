// * scroll To Top
// * Scroll to Top Button

const scroll = document.querySelector(".scroll");
// добавить класс active если scroll окна > 200
window.addEventListener("scroll", () => {
    scroll.classList.toggle("active", window.scrollY > 200);
});
// функция плавного (smooth) скрола вверх (top: 0)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
// scroll вверх при клике на кнопке "вверх"
scroll.addEventListener("click", () => {
    scrollToTop();
});
;
// * mobile Menu
// * Мобильное меню
// const header = document.querySelector(".header");
// const headerMenu = document.querySelector(".header__menu");
// const overlay = document.querySelector(".header__overlay");

// menu.addEventListener("click", () => {
//     headerMenu.classList.toggle("open");
//     header.classList.toggle("open");
//     overlay.classList.toggle("open");
// });

// * Menu
const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    overlay = document.querySelector(".overlay"),
    closeElement = document.querySelector(".menu__close");

// open menu
function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active");
}
// close menu
function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
}

hamburger.addEventListener("click", () => {
    openMenu();
});

closeElement.addEventListener("click", () => {
    closeMenu();
});
;
