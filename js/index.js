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
    if (nome1.length > 20) {
        event.preventDefault();
        mensagemCaracter.innerHTML = "O nome do jogador não pode passar de 20 caracteres";
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
    armazenaJogador(nome1, simboloJogador1)
    event.preventDefault()
    pegaSimbolo1(simboloJogador1)
    modal.close();
    modal2.showModal()
    pegaDados2(simboloJogador1);
})


function armazenaJogador(nome, simbolo) {
    jogador = { nome: nome, simbolo: simbolo }
    jogador_json = JSON.stringify(jogador);
    sessionStorage.setItem('jogadores', jogador_json)
}


let simbolo2 = document.getElementById('spanSimbolo2');


const modal2 = document.getElementById("modal2");
function pegaSimbolo1(simbolo1) {


    let simboloJogador2;
    if (simbolo1 === "X") {
        simboloJogador2 = 'O'
    } else {
        simboloJogador2 = 'X'
    }

    return simbolo2.innerHTML = simboloJogador2

}

function pegaDados2(simbolo){
    const dadosJogador2 = document.getElementById('btnJogar');
    dadosJogador2.addEventListener('submit', function (event) {
    event.preventDefault()
    const nome2 = document.getElementById('nome2').value;
    
    armazenaJogador(nome2, simboloJogador2);
})
}

