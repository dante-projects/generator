/* creacion de elementos con clases e id opcionales */
export function nuevoElemento(contenedor, item, clases = null, id = null) {

    const nuevoElemento = document.createElement(item)
    contenedor.appendChild(nuevoElemento)
    clases ? nuevoElemento.className = clases : null
    id ? nuevoElemento.setAttribute("id", id) : null

    return nuevoElemento
}

/* creacion de elementos input con clases e id opcionales */
export function nuevoInput(contenedor, tipo, clases = null, id = null, nombre = null) {

    const tiposPermitidos = [
        "text",
        "password",
        "email",
        "tel",
        "url",
        "search",
        "number",
        "range",
        "date",
        "month",
        "week",
        "time",
        "checkbox",
        "radio",
        "file",
        "color",
        "button",
        "submit",
        "reset",
        "image",
        "hidden"
    ]
    const nuevoInput = nuevoElemento(contenedor, "input", clases, id)
    if (tiposPermitidos.includes(tipo)) {
        nuevoInput.type = tipo
    } else {
        console.log("Error en la creacion del input:\nParametro de tipo no reconocido: " + tipo)
    }
    nombre ? nuevoInput.name = nombre : null

    return nuevoInput
}

export function inputSeleccionado(array) {
    return array.find(item => item.checked)
}