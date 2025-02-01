import * as comunes from './comunes/funciones_comunes.js'

const aside = document.getElementById("contenedorConfiguracion")
const categorias = {
    contenedores: ["div", "span", "section", "article"],
    listas: ["ol", "ul"],
}
let catSeleccionada = Object.keys(categorias)[0]

document.addEventListener("catSelecionada", (item) => {
    catSeleccionada = item.detail
    dibujarEtiquetasCat(aside, categorias, catSeleccionada)
})

export function dibujarEtiquetasCat(contenedor, array, itemSeleccionado) {
    let test = []
    contenedor.innerHTML = ""
    const contenedorCategoria = comunes.nuevoElemento(contenedor, "div",
        "contenedorCategoria flexColumna", "contenedorCategoria")

    Object.keys(array).forEach((item) => {
        if (item === itemSeleccionado) {
            const titulo = comunes.nuevoElemento(contenedorCategoria, "h2",
                "tituloCat flexCentrado borderRadius4")
            titulo.innerText = comunes.primeraLetraMay(item)
            test.push(item)

            array[item].forEach((etiqueta, num) => {
                const tarjeta = comunes.nuevoElemento(contenedorCategoria, "div",
                    "tarjeta flexCentrado borderRadius4 borderGrey")
                tarjeta.style.animationDelay = `calc(.2s * ${num})`
                tarjeta.innerText = comunes.primeraLetraMay(etiqueta)

                const radio = comunes.nuevoInput(tarjeta, "radio", "inputOculto", null, item)
                test.push(tarjeta, radio)
            })
        }
    })
    console.log(test)
    return test
}

function main() {
    dibujarEtiquetasCat(aside, categorias, catSeleccionada)
}

main()