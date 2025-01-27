import { dibujarCategorias } from "../scripts/nav.js"

const items = ['item1', 'item2', 'item3']

describe("dibujado de Categorias en Nav", () => {
    beforeEach(() => {
        document.body.innerHTML = ""
        document.body.innerHTML = `
        <ul>
            <li data-icono=""></li>
            <li data-icono=""></li>
            <li data-icono=""></li>
        </ul>
        `
    })

    test("Contar los elementos creados", () => {
        const array = document.querySelectorAll("ul li")
        const resultado = dibujarCategorias(array)
        console.log(resultado)
        expect(resultado).toEqual([2, 1, 3])
    })
})