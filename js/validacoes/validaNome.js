export function validaNome(nome, event){
    if (nome.length > 20) {
        event.preventDefault();
        mensagemCaracter.innerHTML = "O nome do jogador não pode passar de 20 caracteres";
        return
    }
    else if(nome.length === 0){
        event.preventDefault();
        mensagemCaracter.innerHTML = 'Esse campo é obrigatório'
        return
    }
    else{
        mensagemCaracter.innerHTML = ''
        seguir()
    }
}

function seguir(){
    return true
}



export function validaNome2(nome, event){
    let mensagemCaracter = document.getElementById("mensagemCaracter2");
    if (nome.length > 20) {
        event.preventDefault();
        mensagemCaracter.innerHTML = "O nome do jogador não pode passar de 20 caracteres";
        return;
    }
    else if(nome.length === 0){
        event.preventDefault();
        mensagemCaracter.innerHTML = 'Esse campo é obrigatório'
        return
    }
    else{
        mensagemCaracter.innerHTML = ''
    }
}