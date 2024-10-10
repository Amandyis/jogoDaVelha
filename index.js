const modal = document.getElementById("modal");

function abrirModal() {
    modal.showModal();
}

const botaoSalvar = document.getElementById('btnSalvar');
let mensagemCaracter = document.getElementById("mensagemCaracter");

const dadosJogador1 = document.getElementById("formJogador1")
dadosJogador1.addEventListener("submit", function (event) {
    

    const nome1 = document.getElementById('nome1').value
    mensagemCaracter.className = "esconder";
    if(nome1.length > 20){
        event.preventDefault();
        mensagemCaracter.className = "mostrar";
        return
    }

    let simboloJogador1;
    const checkBoxs = document.querySelectorAll('input[type="checkbox"]');
    const check = Array.from(checkBoxs).some(checkbox => checkbox.checked);
    if (!check) {
        event.preventDefault()
        alert('O campo se símbolo não foi preenchido!')
        return
    } else {
        simboloJogador1 = Array.from(checkBoxs).filter(checkbox => checkbox.checked).map(checkbox => checkbox.id).join(', ')

    }
    console.log(nome1, simboloJogador1)
    event.preventDefault()
    modal.close();
    abrirModal2(simboloJogador1)
})


const modal2 = document.getElementById("modal2");
function abrirModal2(simbolo1) {
    

    let simboloJogador2;
    if (simbolo1 === "X") {
        simboloJogador2 = 'O'
    } else {
        simboloJogador2 = 'X'
    }

    modal2.innerHTML = `<form class="d-flex flex-column" id="formJogador2">

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Informe seu nome:</label>
                <input type="text" class="form-control campoNome" id="nome2" aria-describedby="emailHelp" required>
                <div id="mensagemCaracter" class="form-text" style="display: none; color: red;">O nome do jogador não pode
                    passar de 20 caracteres</div>
            </div>

            <label for="inputSimbolo" class="form-label">Seu símbolo é: <span>${simboloJogador2}</span></label>
            
            <div class="mt-auto text-end">
                <button type="submit" class="btn btn-primary  botaoSalvar" id="btnSalvar">Jogar</button>
            </div>
        </form>`

    return modal2.showModal();

}
