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