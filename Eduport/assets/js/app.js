const navbar = document.querySelector(".nabvar");
const arrow = document.querySelector(".arrowbox");
const nabvar = document.querySelector(".navbar-toggler")
const block = document.getElementById("block")

window.addEventListener('scroll', () => {
    const mesafe = window.scrollY;

    if (mesafe >= 450) {
        navbar.classList.add("navBar")

    };
    if (mesafe <= 460) {
        navbar.classList.remove("navBar")
    };

    if (mesafe >= 900) {
        arrow.style.display = "block"

    };
    if (mesafe <= 900) {
        arrow.style.display = "none"
    };

});

arrow.addEventListener("click", () => {
    scrollTo(0, 0)
});

nabvar.addEventListener("click", () => {
    block.classList.toggle("blocked")
})




const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'false',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: '.swiper-pagination',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        551: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});