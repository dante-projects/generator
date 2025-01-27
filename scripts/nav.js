import * as func from "../scripts/comunes/funciones_DOM_crear.js"

export function dibujarCategorias(array) {
    array.forEach((item, num) => {
        let nuevoIcono
        if (num === 0) {
            func.nuevoInput(item, "checkbox", "checkboxNav")
            nuevoIcono = func.nuevoElemento(item, "div", "iconoNav")

        } else {
            func.nuevoInput(item, "radio", "radioNav", "radioNav")
            nuevoIcono = func.nuevoElemento(item, "div", "iconoNav")
        }
        nuevoIcono.style.maskImage = `url(${item.getAttribute('data-icono')})`
    })
    let test = []
    test.push(document.getElementsByClassName("radioNav").length)
    test.push(document.getElementsByClassName("checkboxNav").length)
    test.push(document.getElementsByClassName("iconoNav").length)

    return test
}

const listaCategorias = Array.from(document.querySelectorAll("#listaCategorias li"))
dibujarCategorias(listaCategorias)
