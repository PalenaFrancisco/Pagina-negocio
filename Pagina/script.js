
var sectionSize;

document.addEventListener("DOMContentLoaded", function () {
    var miDiv = document.getElementById("inicio");
    var alto = miDiv.offsetHeight;
    sectionSize = alto - 200;
});

let prevScrollpos = window.scrollY;

window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    let header = document.getElementById("main-header");
    let botonArriba = document.getElementById("botonarriba");

    if (currentScrollPos >= sectionSize) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    // Mostrar u ocultar el botón según la posición de desplazamiento
    if (currentScrollPos >= 20) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }

    prevScrollpos = currentScrollPos;
};

// Escuchar cambios en el estado del checkbox
var disableScrollCheckbox = document.getElementById('btn-menu');

disableScrollCheckbox.addEventListener('change', function () {
    if (this.checked) {
        // Desactivar la barra de desplazamiento
        document.body.style.overflowY = 'hidden';
    } else {
        // Habilitar la barra de desplazamiento
        document.body.style.overflowY = 'auto'; // O puedes establecerlo en 'visible' según tus necesidades
    }
});

const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add("animation1");
        }
    });
});

const observador = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add("animation2");
        }
    });
});

const viewbox = document.querySelectorAll(".col2");
viewbox.forEach((col2) => {
    observer.observe(col2);
});

const viewbox1 = document.querySelectorAll(".col2I");
viewbox1.forEach((col2I) => {
    observador.observe(col2I);
});

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


