/*=============== Header product ===============*/
let list = document.getElementById('product');
let item = document.querySelector('.nav__item-list');

console.log(list,item);
list.onclick = function() {
    item.classList.toggle('item-show');
}


/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".top__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredslides: true,
    slidesPerview: "auto", //3
    loop: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        520: {
        slidesPerView: 2,
        },
        950: {
        slidesPerView: 3,
        },
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});