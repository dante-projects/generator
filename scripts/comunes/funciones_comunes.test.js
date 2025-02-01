import * as comunes from "./funciones_comunes.js"

describe("nuevoElemento", () => {
    test("Devuelve el elemento creado", () => {
        document.body.innerHTML = "<div id='divMockeada'></div>"
        const contenedor = document.getElementById("divMockeada")
        const elemento = comunes.nuevoElemento(contenedor, "span", "clase1 clase2", "id1")

        expect(elemento)
        expect(elemento.parentNode.id).toBe("divMockeada")
        expect(elemento.tagName).toBe("SPAN")
        expect(Array.from(elemento.classList)).toEqual(["clase1", "clase2"])
        expect(elemento.id).toBe("id1")
    })
})

describe("nuevoInput", () => {
    test("Devuelve el input creado", () => {
        document.body.innerHTML = "<form id='formMockeado'></form>"
        const contenedor = document.getElementById("formMockeado")
        const input = comunes.nuevoInput(contenedor, "radio", "clase1 clase2", "id1", "grupoRadio")

        expect(input)
        expect(input.parentNode.id).toBe("formMockeado")
        expect(input.tagName).toBe("INPUT")
        expect(input.type).toBe("radio")
        expect(Array.from(input.classList)).toEqual(["clase1", "clase2"])
        expect(input.id).toBe("id1")
        expect(input.name).toBe("grupoRadio")
    })
})

describe("seleccionPublicar", () => {
    test("Comprueba la pubicacion del evento", () => {
        const array = "datos de prueba"
        let datosRecibidos
        document.addEventListener("eventoTest", (datos) => {
            datosRecibidos = datos.detail
        })
        comunes.publicarEvento(array, "eventoTest")
        expect(datosRecibidos).toBe("datos de prueba")
    })
})