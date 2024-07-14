const uparrow = document.getElementById("arrowid");

window.addEventListener('scroll', function () {
    const mesafe = window.scrollY;

if (mesafe > 200){uparrow.style.display="block"}

if (mesafe < 200){uparrow.style.display="none"}

})

uparrow.addEventListener('click', function(){
    window.scrollTo(0,0)
})

