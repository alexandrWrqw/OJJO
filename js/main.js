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

    readBtn.addEventListener('click', function() {
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
// Swiper product block
let slider = new Swiper ('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    
    zoom: {
        maxRatio: 5,
        minRatio: 1,
    },
});
// Click image => open swiper
const body = document.querySelector('body')
const content = document.querySelector('.product__swiper');
const openBtns = document.querySelectorAll('.image-btn')
const closeBtn = document.querySelector('.close-btn');

openBtns.forEach(function (imageBtn) {
    imageBtn.addEventListener('click', () => {
        slider.slideTo(0, 800);
        content.classList.remove('none');
        body.classList.add('no-scroll');
    })
})

closeBtn.addEventListener('click', function () {
    content.classList.add('none');
    body.classList.remove('no-scroll');
});