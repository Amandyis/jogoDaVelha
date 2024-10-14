export function validaNome(nome, event){
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

export function validaCheck(event){
    const checkBoxs = document.querySelectorAll('input[type="radio"]');
    const check = Array.from(checkBoxs).some(checkbox => checkbox.checked);

    if (!check) {
        event.preventDefault();
        mensagemCheck.innerHTML = 'Esse campo é obrigatório'
        return null;
    } 
    else {
        return Array.from(checkBoxs).filter(checkbox => checkbox.checked).map(checkbox => checkbox.id).join(', ');
    }
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