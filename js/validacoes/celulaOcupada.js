import {abrirModalCelulaOcupada} from '/js/modais/mensagemDeCelulaOcupada.js'

export function validaJogada(item){
    if (!item) return false;

    console.log("Simbolo na celula: "+item.innerHTML, "Tamanho da célula: " + item.innerHTML.length)


    if (item.innerHTML.length > 0){
        console.log("Entrou na celula ocupada")
        abrirModalCelulaOcupada()
        return false;
    }
    return true
}