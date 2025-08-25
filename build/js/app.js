const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

document.addEventListener('DOMContentLoaded', function() {
    crearGaleria()
})

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')
    const CANTIDAD_IMAGENES = 6

    for(let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const globo = document.createElement('div')
        globo.classList.add('globo-proyecto')

        const imagen = document.createElement('IMG')
        imagen.src = `src/img/proyecto${i}.jpg`
        imagen.alt = 'Imagen Galería'

        // Event Handler = Es el proceso de detectar y responder a una interacción del usuario
        imagen.onclick = function () {
            mostrarImagen(i)
        }
        
        globo.appendChild(imagen)
        galeria.appendChild(globo)
    }
}

function mostrarImagen (i) {
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/proyecto${i}.jpg`
    imagen.alt = 'Imagen Galería'

    //Generar Modal = Es una ventana de diálogo o cuadro emergente que se muestra sobre la página actual.
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    // Botón cerrar modal
    const cerrarModalBoton = document.createElement('BUTTON')
    cerrarModalBoton.textContent = 'X'
    cerrarModalBoton.classList.add('boton-cerrar')
    cerrarModalBoton.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBoton)

    //agregar al HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

    // Agregar evento para cerrar con ESC
    document.addEventListener("keydown", (ev) => {
        if (ev.key === 'Escape'){
            cerrarModal()
        }
    })    
} 

function cerrarModal () {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')

    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 400);
    
}