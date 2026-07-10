const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let actual = 0;

function cambiarSlide(){

    slides[actual].classList.remove("active");
    dots[actual].classList.remove("active-dot");

    actual++;

    if(actual >= slides.length){
        actual = 0;
    }

    slides[actual].classList.add("active");
    dots[actual].classList.add("active-dot");

}

setInterval(cambiarSlide,3500);

// Mensaje de pedidos

const estado = document.getElementById("estadoPedidos");

if(estado){

    const hoy = new Date().getDay();

    if(hoy === 3 || hoy === 6){

        estado.innerHTML = "🟢 ¡Hoy estamos aceptando pedidos!";

    }else{

        estado.innerHTML = "📅 Recibimos pedidos los miércoles y sábados.";

    }

}
