describe("Pruebas de funciones DOM", () => {

    let div
    let resultado = []
    const categorias_Mock = {
        test1: ["uno", "dos"],
        test2: ["tres", "cuatro"],
    }
    let catSeleccionada_Mock = Object.keys(categorias_Mock)[1]

    beforeEach(async () => {
        document.body.innerHTML = "<div id='contenedorConfiguracion'></div>"
        div = document.getElementById("contenedorConfiguracion")

        const { dibujarEtiquetasCat } = await import("./seleccion_etiquetas.js")
        resultado = dibujarEtiquetasCat(div, categorias_Mock, catSeleccionada_Mock)
    })

    test("funcion2 debe crear un span dentro del contenedor", () => {
        expect(resultado.length).toBe(5)
        expect(resultado[0]).toBe("test2")
        expect(resultado[1].tagName).toBe("DIV")
        expect(resultado[1].innerText).toBe("Tres")
        expect(resultado[2].tagName).toBe("INPUT")
        expect(resultado[3].tagName).toBe("DIV")
        expect(resultado[3].innerText).toBe("Cuatro")
        expect(resultado[4].tagName).toBe("INPUT")
    })
})
