const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let actual = 0;

function mostrarSlide(indice){

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active-dot"));

    slides[indice].classList.add("active");
    dots[indice].classList.add("active-dot");

}

function siguienteSlide(){

    actual++;

    if(actual >= slides.length){
        actual = 0;
    }

    mostrarSlide(actual);

}

setInterval(siguienteSlide, 3500);

// Permite cambiar tocando los puntitos

dots.forEach((dot, index)=>{

    dot.addEventListener("click", ()=>{

        actual = index;

        mostrarSlide(actual);

    });

});
