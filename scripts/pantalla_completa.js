import * as comunes from "./comunes/funciones_comunes.js"

const maximizarPantalla = document.getElementById("maximizarPantalla")
const opciones = Array.from(document.querySelectorAll(".panelGenerador .inputOculto[type='radio']"))
let opcionSeleccionada

maximizarPantalla.addEventListener("change", () => {

    if (maximizarPantalla.checked) {
        document.documentElement.requestFullscreen()
    } else {
        document.fullscreenElement ? document.exitFullscreen() : null
    }
})

document.addEventListener("fullscreenchange", () => {

    if (document.fullscreenElement) {
        document.querySelector(".presentacion").checked = true
    } else {
        opcionSeleccionada.checked = true
    }
})

opciones.forEach((item) => {
    item.addEventListener("click", () => {
        opcionSeleccionada = comunes.inputSeleccionado(opciones)
    })
})