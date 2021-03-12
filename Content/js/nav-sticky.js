const barraMenu = document.querySelector('.bg-navbar');

// Eventos
cargarEventListeners();

function cargarEventListeners() {

    document.addEventListener('scroll', calcularPixeles);
}

function calcularPixeles(e) {
    e.preventDefault();

    if (window.scrollY > 0) {
        barraMenu.style.boxShadow = "2px 2px 6px rgba(0,0,0,1)";
    } else {
        barraMenu.style.boxShadow = "0px 0px 0px";
    }
}

