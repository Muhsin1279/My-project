//! ilk animasyon

const menu = document.querySelectorAll('header');
const slider = document.querySelectorAll('.slider');


menu.forEach((item, i) => {
    item.style.animation = ` menu 1s ease-in-out forwards ${i / 7}s `;
    item.addEventListener("animationend", () => {
        slider.forEach((item, i) => {
            item.style.animation = `slider 1s ease-in-out forwards ${i / 7}s`;
        });
    });
});


//! anasayfadaki slayt bölümü

const slides = document.querySelectorAll('.image');

const go = document.getElementById('go');
const back = document.getElementById('back');
const auto = true;
const intervaltime = 3000;
let slideinterval;

const goSlide = () => {
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active')

    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add('active');
    } else {
        slides[0].classList.add('active');
    }
}

const backSlide = () => {
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active')

    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add('active');
    } else {
        slides[slides.length - 1].classList.add('active');
    }
}


go.addEventListener('click', () => {
    goSlide();
    if (auto) {
        clearInterval(slideinterval);
        slideinterval = setInterval(goSlide, intervaltime);
    }
});

back.addEventListener('click', () => {
    backSlide();
    clearInterval(slideinterval);
    slideinterval = setInterval(backSlide, intervaltime);

});

if (auto) {
    slideinterval = setInterval(goSlide, intervaltime);
}



//!     news bölümü basit slider

const newsslider = document.querySelectorAll(".news");
const box = document.querySelectorAll(".box");
const next = document.querySelectorAll(".next");
const prev = document.querySelectorAll(".prev");
const itemNumber = box.length




newsslider.forEach((item, i) => {

    let newssize = item.getBoundingClientRect();

    let newswidth = newssize.width;

    next[i].addEventListener('click', () => {
        item.scrollLeft += newswidth;

        prev[i].addEventListener('click', () => {
            item.scrollLeft -= newswidth;
        });

    });

});


//!    scrolll özelliği   */


const solution = document.querySelector("nav > ul > li:nth-child(2)");
const news = document.querySelector("nav > ul > li:nth-child(3)");
const footer = document.querySelector("nav > ul > li:nth-child(5)");
const solutionanimated = document.querySelectorAll(".solutionbox");
const contentanimated = document.querySelectorAll("section")
const solutioncards = document.querySelectorAll(".cards")
const asideimg = document.querySelectorAll("aside")
const aside = document.querySelectorAll(".content")

window.addEventListener('scroll', function () {
    const mesafe = window.scrollY;


    //içerik animasyon 

    if (mesafe >= 400 || mesafe <=1400 ) {
        aside.forEach((e, o) => {
            e.style.animation = `news2 1s ease-in-out forwards ${o / 5}s`;
            e.addEventListener("animationend", () => {
                asideimg.forEach((a, i) => {
                    a.style.animation = `news 1s ease-in-out forwards ${i / 5}s`

                });
            });
        });
    

    if (mesafe >= 1400 || mesafe <= 450) {
        aside.forEach((e, o) => {
            e.style.animation = `remove-newss 0.2s ease-in-out forwards ${o / 5}s`;
            e.addEventListener("animationend", () => {
                asideimg.forEach((a, i) => {
                    a.style.animation = `remove-newss 0.2s ease-in-out forwards ${i / 10}s`

                });
            });
        });
    }

    //çözümler bölümü animasyon

    if (mesafe >= 1300) {
        solutionanimated.forEach((a, i) => {
            a.style.animation = `down 1s ease-in-out forwards ${i / 10}s`;
            a.addEventListener("animationend", () => {
                solutioncards.forEach((a, i) => {
                    a.style.animation = `newss 1s ease-in-out forwards ${i / 5}s`
                });
            });

        });
    }

    if (mesafe >= 2650 || mesafe <= 1400) {
        solutionanimated.forEach((a, i) => {
            a.style.animation = `remove-newss 0.2s ease-in-out forwards ${i/15}s`
            a.addEventListener("animationend", () => {
                solutioncards.forEach((a, i) => {
                    a.style.animation = `remove-newss 0.2s ease-in-out forwards ${i/15}s`
                });
            });
        });
    }
    if (mesafe >= 1827) {
        solution.classList.add("aktif");
    }
    if (mesafe >= 2779 || mesafe <= 1827) {
        solution.classList.remove("aktif");
    }
    if (mesafe >= 3300) {
        news.classList.add("aktif")
    }
    if (mesafe >= 4000 || mesafe <= 3300) {
        news.classList.remove("aktif")
    }
    if (mesafe >= 4056) {
        footer.classList.add("aktif");
    }
    if (mesafe <= 4056) {
        footer.classList.remove("aktif");
    }
};


})