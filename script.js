const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let actual = 0;

function mostrarSlide(indice){

    slides.forEach(slide=>slide.classList.remove("active"));
    dots.forEach(dot=>dot.classList.remove("active-dot"));

    slides[indice].classList.add("active");
    dots[indice].classList.add("active-dot");

}

function siguienteSlide(){

    actual++;

    if(actual>=slides.length){
        actual=0;
    }

    mostrarSlide(actual);

}

setInterval(siguienteSlide,3500);

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        actual=index;

        mostrarSlide(actual);

    });

});

/*========================*/
/* Scroll Animation */
/*========================*/

const reveals=document.querySelectorAll(".reveal");

function reveal(){

    const windowHeight=window.innerHeight;

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<windowHeight-120){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();
const slidesMes = document.querySelectorAll(".slide-mes");
const dotsMes = document.querySelectorAll(".dot-mes");

let currentMes = 0;

function showSlideMes(index){

    slidesMes.forEach(slide=>slide.classList.remove("active-mes"));

    dotsMes.forEach(dot=>dot.classList.remove("active-dot-mes"));

    slidesMes[index].classList.add("active-mes");

    dotsMes[index].classList.add("active-dot-mes");

}

dotsMes.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentMes=index;

        showSlideMes(currentMes);

    });

});

setInterval(()=>{

    currentMes++;

    if(currentMes>=slidesMes.length){

        currentMes=0;

    }

    showSlideMes(currentMes);

},3500);
