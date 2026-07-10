const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let actual = 0;

function cambiarSlide() {

    slides[actual].classList.remove("active");
    dots[actual].classList.remove("active-dot");

    actual++;

    if (actual >= slides.length) {
        actual = 0;
    }

    slides[actual].classList.add("active");
    dots[actual].classList.add("active-dot");

}

setInterval(cambiarSlide, 3500);
