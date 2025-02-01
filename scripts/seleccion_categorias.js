import * as comunes from "./comunes/funciones_comunes.js"

const navCategorias = Array.from(document.querySelectorAll("#listaCategorias [type='radio']"))
let catSeleccionada 

navCategorias.forEach((item) => {
    if (item.dataset.cat !== "noConfigurado") { /* comprobacion de desarrollo */
        item.addEventListener("click", () => {
            catSeleccionada = navCategorias.find(item => item.checked).dataset.cat
            comunes.publicarEvento(catSeleccionada, "catSelecionada")
        })
    }
})