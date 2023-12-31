// Nav mobile
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav--mobile');
    document.body.classList.toggle('no-scroll');
}
// Custom select
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.sorting__button');
    const dropDownList = dropDownWrapper.querySelector('.sorting__list');
    const dropDownListItems = dropDownList.querySelectorAll('.sorting__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.sorting__input-hidden');


    dropDownBtn.addEventListener('click', function () {
        dropDownList.classList.toggle('sorting__list--visible');
        this.classList.add('sorting__button--active');
    });

    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (event) {
            event.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.classList.remove('sorting__button--active');
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('sorting__list--visible');
        });
    });

    document.addEventListener('click', function (event) {
        if (event.target !== dropDownBtn) {
            dropDownList.classList.remove('sorting__list--visible');
            dropDownBtn.classList.remove('sorting__button--active');
        };
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Tab' || event.key === 'Escape') {
            dropDownList.classList.remove('sorting__list--visible');
            dropDownBtn.classList.remove('sorting__button--active');
        };
    });
});
// More-btn catalog block
document.querySelectorAll('.catalog__container').forEach(function (catalogWrapper) {
    const catalogCards = catalogWrapper.querySelector('.catalog__cards');
    const moreBtn = catalogWrapper.querySelector('.more-btn');

    moreBtn.addEventListener('click', function() {
        catalogCards.classList.toggle('catalog__cards--active');
        this.textContent = this.textContent === 'Покажите еще' ? 'Скрыть' : 'Покажите еще';

        if (this.textContent !== 'Скрыть') {
            this.scrollIntoView({ 
                block: "center", 
                behavior: "smooth"
            });
        };
    });
});
// Read-btn feature block
document.querySelectorAll('.feature__container').forEach(function (featureWrapper) {
    const readBtn = featureWrapper.querySelector('.read-btn');
    const featureInfo = featureWrapper.querySelector('.feature__info');

    readBtn.addEventListener('click', function () {
        featureInfo.classList.toggle('feature__info--active');
        this.textContent = this.textContent === 'Читать полностью' ? 'Скрыть' : 'Читать полностью';

        if (this.textContent !== 'Скрыть') {
            this.scrollIntoView({ 
                block: "nearest", 
                behavior: "smooth"
            });
        };
    });
});
// form block 
const sent = document.querySelector('.form__sent');
const sentBtn = document.querySelector('.form__btn');
let input = document.querySelector('.form__input');
const textValueNone = document.querySelector('.form__value-none');

sentBtn.addEventListener('click', function () {
    if (input.value !== '') {
        sent.classList.add('sent');
        textValueNone.classList.remove('value-none-visible');
    } else {
        textValueNone.classList.add('value-none-visible');
        input.focus();
    };
});