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