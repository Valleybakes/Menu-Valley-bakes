// ===============================
// Valley Bakes
// ===============================

// Mensaje de pedidos según el día

const estado = document.getElementById("estadoPedidos");

if (estado) {

    const hoy = new Date().getDay();

    if (hoy === 3 || hoy === 6) {

        estado.innerHTML = "🟢 ¡Hoy estamos aceptando pedidos!";

    } else {

        estado.innerHTML = "📅 Los pedidos se toman los miércoles y sábados.";

    }

}

// Animación al cargar

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});