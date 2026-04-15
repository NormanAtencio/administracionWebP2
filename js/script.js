/*const btnMenu = document.getElementById("btnMenu");
const navLinks = document.getElementById("navLinks");
const opciones = navLinks.querySelectorAll("a");

btnMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        btnMenu.innerHTML = "X";
        btnMenu.setAttribute("aria-expanded", "true")
    } else {
        btnMenu.innerHTML = "☰";
        btnMenu.setAttribute("aria-expanded", "false")
    }
});

opciones.forEach(i => {
    i.addEventListener("click", () => {
        navLinks.classList.remove("active");
        btnMenu.innerHTML = "☰";
        btnMenu.setAttribute("aria-expanded", "false");
    })
});*/

/* Para cookies*/
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

/*En caso de que no haya nada guardado en local storage, se muestra el aviso de cookies*/
if(!localStorage.getItem('cookies-aceptadas')) {
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
};

botonAceptarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    /*Para identificar cuando el usuario presionó el botón de aceptar las cookies*/ 
    localStorage.setItem('cookies-aceptadas', true);
});

