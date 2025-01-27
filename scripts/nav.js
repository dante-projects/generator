import * as func from "../scripts/comunes/funciones_DOM_crear.js"

function dibujarCategorias(array) {
    array.forEach((item, num) => {
        if (num === 0) {
            func.nuevoInput(item, "checkbox", "checkboxNav")
            const nuevoIcono = func.nuevoElemento(item, "div", "iconoNav")
            nuevoIcono.style.maskImage = `url(${item.getAttribute('data-icono')})`    

        } else {
            func.nuevoInput(item, "radio", "radioNav", "radioNav")
            const nuevoIcono = func.nuevoElemento(item, "div", "iconoNav")
            nuevoIcono.style.maskImage = `url(${item.getAttribute('data-icono')})`    
        }
    })
    let test = [] 
    test.push(listaCategorias.length)
    test.push(document.getElementsByClassName("radioNav").length)
    test.push(document.getElementsByClassName("checkboxNav").length)
    test.push(document.getElementsByClassName("iconoNav").length)

    console.log(test)
}

const listaCategorias = Array.from(document.querySelectorAll("#listaCategorias li"))
dibujarCategorias(listaCategorias)