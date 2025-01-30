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

describe("inputSeleccionado", () => {
    test("Devuelve el elemento checked = true", () => {
        const inputs = [
            { checked: false, value: 1 },
            { checked: false, value: 2 },
            { checked: true, value: 3 },
        ]
        
        expect(comunes.inputSeleccionado(inputs)).toEqual(inputs[2])
    })
})