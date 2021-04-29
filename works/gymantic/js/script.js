// * Импорт библиотек

// * Импорт модулей

// Кнопка мобильного меню hamburger
// * Кнопка мобильного меню hamburger

const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".header__overlay");

menu.addEventListener("click", () => {
    menu.classList.toggle("open");
    header.classList.toggle("open");
    overlay.classList.toggle("open");
});
;
// Переключение темы оформления
// * Тема сайта

let checkbox = document.querySelector('input[name="theme"]');
let htmlElement = document.documentElement;

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        smoothTrans();
        htmlElement.setAttribute("data-theme", "dark");
    } else {
        smoothTrans();
        htmlElement.setAttribute("data-theme", "light");
    }
});

// Плавный переход на темную тему
let smoothTrans = () => {
    htmlElement.classList.add("transition");
    window.setTimeout(() => {
        htmlElement.classList.remove("transition");
    }, 1000);
};
;
// Слайдер секции testimonials
// * Переключение слайдов секции Testimonials

const slides = document.querySelector(".testimonials__content--slider")
    .children;
const indicatorImgs = document.querySelector(
    ".testimonials__content--indicator"
).children;

for (let i = 0; i < indicatorImgs.length; i++) {
    indicatorImgs[i].addEventListener("click", function () {
        // удалить класс active у всех картинок индикаторов
        for (let j = 0; j < indicatorImgs.length; j++) {
            indicatorImgs[j].classList.remove("active");
        }
        // добавить класс active активной картинке индикатора
        this.classList.add("active");
        // получить индекс текущего индикатора
        const id = this.getAttribute("data-id");

        // удалить класс active у всех слайдов
        for (let k = 0; k < slides.length; k++) {
            slides[k].classList.remove("active");
        }
        // добавить класс active активному слайду
        slides[id].classList.add("active");
    });
}
;
// Прокрутка старницы вверх
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
// Форма регистрации
// * Переключение секций формы регистрации

// * Переменные
// First page
const slidePage = document.querySelector(".register__content--form__page");
const firstNextBtn = document.querySelector(".next-1");
// Second page
const firstPrevBtn = document.querySelector(".prev-1");
const secondNextBtn = document.querySelector(".next-2");
// Third page
const secondPrevBtn = document.querySelector(".prev-2");
const thirdNextBtn = document.querySelector(".next-3");
// Forth page
const thirdPrevBtn = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
// Progress Step
const progressStep = document.querySelectorAll(".register__progress--step");
// Progress Number (The Span Element)
const progressNumber = document.querySelectorAll(
    ".register__progress--step span"
);
// Progress Tick Mark
const progressTick = document.querySelectorAll(".fa-check");

let max = 4;
let current = 1;

// Функция добавления отметки пройденного шага
function tick() {
    // добавить класс active странице текущего шага
    progressStep[current - 1].classList.add("active");
    progressNumber[current - 1].classList.add("active"); // display: none;
    progressTick[current - 1].classList.add("active"); // display: block;
    current += 1;
}

// Функция удаления отметки пройденного шага
function untick() {
    // удалить класс active странице текущего шага
    progressStep[current - 2].classList.remove("active");
    progressNumber[current - 2].classList.remove("active");
    progressTick[current - 2].classList.remove("active");
    current -= 1;
}

// * Обработка событий кнопок Next
// First Next Button Event
firstNextBtn.addEventListener("click", () => {
    // перемещение секции слайдов влево
    slidePage.style.marginLeft = "-33%";
    // отметка выполненного шага
    tick();
});
// Second Next Button Event
secondNextBtn.addEventListener("click", () => {
    // перемещение секции слайдов влево
    slidePage.style.marginLeft = "-100%";
    // отметка выполненного шага
    tick();
});
// Third Next Button Event
thirdNextBtn.addEventListener("click", () => {
    // перемещение секции слайдов влево
    slidePage.style.marginLeft = "-200%";
    // отметка выполненного шага
    tick();
});
// Submit Button Event
submitBtn.addEventListener("click", () => {
    // отметка о выполнении шага
    tick();
    // задаержка после отправки формы
    setTimeout(() => {
        // выводим сообщение
        alert(
            "Your Form Has Been Successfully Submitted. Thank You My Friend."
        );
        // перезагружаем страницу
        location.reload();
    }, 1000);
});

// * Обработка событий кнопок Previous
// First Previous Button Event
firstPrevBtn.addEventListener("click", () => {
    // перемещение секции слайдов вправо
    slidePage.style.marginLeft = "0";
    // удалить отметку выполнения шага
    untick();
});
// Second Previous Button Event
secondPrevBtn.addEventListener("click", () => {
    // перемещение секции слайдов вправо
    slidePage.style.marginLeft = "-33%";
    // удалить отметку выполнения шага
    untick();
});
// Third Previous Button Event
thirdPrevBtn.addEventListener("click", () => {
    // перемещение секции слайдов вправо
    slidePage.style.marginLeft = "-100%";
    // удалить отметку выполнения шага
    untick();
});
;
