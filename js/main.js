/*=============== Header product ===============*/
let list = document.getElementById('product');
let item = document.querySelector('.nav__item-list');

console.log(list,item);
list.onclick = function() {
    item.classList.toggle('item-show');
}


/*=============== SHOW SCROLL UP ===============*/
let up = document.querySelector(".scrollup");
window.onscroll = function () {
    if (scrollY >= 450) {
        up.classList.add("show");
    } else {
        up.classList.remove("show");
    }
};

up.onclick = function () {
    scrollTo({
        top: 0,
        behavior: "smooth",
    });
};


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


