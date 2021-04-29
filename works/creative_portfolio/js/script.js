// обработка событий после построения DOM дерева
window.addEventListener("DOMContentLoaded", () => {
    // * Mobile Menu
    // * Мобильное меню
const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".header__overlay");

menu.addEventListener("click", () => {
    menu.classList.toggle("open");
    header.classList.toggle("open");
    overlay.classList.toggle("open");
});
;
    // * Scroll To Top
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
    // * Modal Windows
    // * Modal Window
// Читаем модальное окно из html
const modal = document.querySelector(".modal"),
    modalTrigger = document.querySelectorAll("[data-modal]");

// Modal open function
function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    // отмена прокрутки
    document.body.style.overflow = "hidden";
    // Open modal timer reset
    //clearInterval(modalTimerId);
}
// Modal close function
function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    // включение прокрутки
    document.body.style.overflow = "";
}

// Open modal
modalTrigger.forEach((button) => {
    button.addEventListener("click", openModal);
});

// * Open modal timer
// const modalTimerId = setTimeout(openModal, 3000);

// * Open modal when scrolling to the end of the page
// Open modal when scrolling function
function showModalByScroll() {
    if (
        window.pageYOffset + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
    ) {
        openModal();
        // Open modal when scrolling remove
        window.removeEventListener("scroll", showModalByScroll);
    }
}
// Open modal when scrolling
window.addEventListener("scroll", showModalByScroll);

// Close modal
modal.addEventListener("click", (event) => {
    // если нажали на подложку или на крестик
    if (
        event.target === modal ||
        event.target.getAttribute("data-close") == ""
    ) {
        closeModal();
    }
});
document.addEventListener("keydown", (event) => {
    // если нажали клавишу Escape
    if (event.code === "Escape" && modal.classList.contains("show")) {
        closeModal();
    }
});

// * функция модального окна статусного сообщения
// ! используются функции из файла modal.js
// модальное окно
function showStatusModal(message) {
    // получаем исходное модальное окно
    const prevModalDialog = document.querySelector(".modal__content");
    // скрыть исходное модальное окно
    prevModalDialog.classList.add("hide");
    openModal(); // открыть модальное окно
    // создание блока модального окна
    const statusModal = document.createElement("div");
    // добавить класс modal__content
    statusModal.classList.add("modal__content");
    // формирование верстки модального окна
    statusModal.innerHTML = `
        <div class="modal__form">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
    `;
    // поместим верстку в модальное окно
    document.querySelector(".modal").append(statusModal);
    // "возвращение" исходного вида модального окна через определенное время
    setTimeout(() => {
        statusModal.remove(); // удалить новое модальное окно статуса
        // показать исходное модальное окно
        prevModalDialog.classList.add("show");
        prevModalDialog.classList.remove("hide");
        closeModal(); // закрыть модальное окно
    }, 4000);
}
;
    // * Tabs
    // * Табы
const // контейнер табов
    tabsContainer = document.querySelector(".tabs__items"),
    // табы
    tabs = document.querySelectorAll(".tabs__item"),
    // контент табов
    tabsContent = document.querySelectorAll(".tabs__block");

// скрытие табов
function hideTabContent() {
    // скрыть контент табов
    tabsContent.forEach((item) => {
        item.classList.add("hide");
        item.classList.remove("show", "fade");
    });

    // удалить класс active скрываемых табов
    tabs.forEach((item) => {
        item.classList.remove("tabs__item_active");
    });
}

// отображение табов
function showTabContent(i = 0) {
    // показать контент табов
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    // добавить класс active отображаемых табов
    tabs[i].classList.add("tabs__item_active");
}

// скрыть контент таба
hideTabContent();
// показать контент таба
showTabContent();

// смена табов и контента при клике
tabsContainer.addEventListener("click", (event) => {
    const target = event.target;

    // если это элемент - таб
    if (target && target.classList.contains("tabs__item")) {
        tabs.forEach((item, i) => {
            // если это элемент - таб на который кликнули
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});
;
    // * Forms
    // * Формы
// получаем формы
const forms = document.querySelectorAll("form");
// этапы отправки форм (сообщения для пользователя)
const message = {
    loading: "img/forms/spinner.svg",
    success: "Спасибо, скоро мы свяжемся с вами.",
    failure: "Что-то пошло не так.",
};

// проверка всех форм и отправка данных из них
forms.forEach((item) => {
    postData(item);
});

// функция отправки данных
function postData(form) {
    //если нажали отпавить (Submit)
    form.addEventListener("submit", (event) => {
        // отмена стандартного поведения браузера
        event.preventDefault();
        // генерация блока статусного сообщения

        // ? для добавления картики
        const statusMessage = document.createElement("img"); // добавить картинку
        statusMessage.src = message.loading; // добавить атрибут src
        // стили изображения загрузки
        statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
        `;

        // ? для добавления текстового сообщения
        // const statusMessage = document.createElement("div"); // создать  div
        // statusMessage.classList.add("status"); // добавить класс "status"
        // statusMessage.textContent = message.loading; // вывести сообщение

        // ? вывести индикатор загрузки
        form.insertAdjacentElement("afterend", statusMessage); // добавить после формы

        // ? вывести текстовое сообщение на страницу
        // form.append(statusMessage); // вставка в форму

        const request = new XMLHttpRequest(); // создать экземпляр запроса
        request.open("POST", "server.php"); // инициализация (тип запроса, адрес)
        request.setRequestHeader("Content-type", "application/json"); // настройка заголовков

        const formData = new FormData(form); // объект для данных из формы
        const object = {}; // объект для отправляемых данных

        // заносим данные из формы в объект для оправки
        formData.forEach(function (value, key) {
            object[key] = value;
        });

        const json = JSON.stringify(object); // преобразуем данные в формат JSON

        request.send(json); // отправка данных

        // действия после опраки запроса
        request.addEventListener("load", () => {
            if (request.status === 200) {
                // если запрос выполнен
                console.log(request.response); // ! для теста
                console.log(message.success); // ! для теста
                // ! модально окно благодарности (из файла modal.js)
                showStatusModal(message.success);
                form.reset(); // очитска формы
                statusMessage.remove(); //удалить статусное сообщение
            } else {
                console.log(message.failure); // ! для теста
                // ! модально окно об ошибке (из файла modal.js)
                showStatusModal(message.failure);
            }
        });
    });
}
;
});
