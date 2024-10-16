import {abrirMensagemEmpate} from "/js/modais/mensagemEmpate.js"

let jaFoi = [];

export function verificarEmpate(elemento, event) {
    
    jaFoi.push(elemento);
    if (jaFoi.length === 9) {
        event.preventDefault()
        abrirMensagemEmpate()
        console.log(jaFoi)
        return true
    }
    console.log(jaFoi)

}

export function reiniciarEmpate() {
    jaFoi = [];
}