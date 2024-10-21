import {abrirMensagemEmpate} from "/js/modais/mensagemEmpate.js"

var jaFoi = [];

export function verificarEmpate(elemento, event) {
    
    jaFoi.push(elemento);
    if (jaFoi.length === 9) {
        event.preventDefault()
        abrirMensagemEmpate()
        console.log(jaFoi)
        return true
    }
    console.log(jaFoi)
    return

}

export function reiniciarEmpate() {
    jaFoi = [];
}

// function testeDeEmpate(){
//     let campos =
// }