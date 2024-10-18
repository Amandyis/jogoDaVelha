import { jogar } from './jogar.js';
import {validaNome} from './validacoes/validaNome.js';
import {validaCheck} from './validacoes/validaCheck.js'

const modal = document.getElementById("modal");

function abrirModal() {
    return modal.showModal();
}

const btnIniciar = document.getElementById('botaoIniciar');
btnIniciar.addEventListener('click', abrirModal)


let mensagemCaracter = document.getElementById("mensagemCaracter");
let mensagemCheck = document.getElementById('mensagemCheck');

const dadosJogador1 = document.getElementById("formJogador1");

dadosJogador1.addEventListener("submit", function (event) {
    const nome1 = document.getElementById('nome1').value;

    validaNome(nome1, event)

    const simboloJogador1 = validaCheck(event);
    if (simboloJogador1 !== null && nome1.length !== 0) { 
        armazenaJogador(nome1, simboloJogador1, 1);
        event.preventDefault();
        pegaSimbolo1(simboloJogador1);
        modal.close();
        modal2.showModal();
    }
});

function armazenaJogador(nome, simbolo, jogadorNumero) {
    let jogadores = JSON.parse(sessionStorage.getItem('jogadores')) || {};
    jogadores[`jogador${jogadorNumero}`] = { nome: nome, simbolo: simbolo };
    sessionStorage.setItem('jogadores', JSON.stringify(jogadores));
}

let simbolo2 = document.getElementById('spanSimbolo2');
const modal2 = document.getElementById("modal2");

function pegaSimbolo1(simbolo1) {
    let simboloJogador2 = (simbolo1 === "X") ? 'O' : 'X';
    simbolo2.innerHTML = simboloJogador2;
}

const dadosJogador2 = document.getElementById('btnJogar');
dadosJogador2.addEventListener('click', function (event) {
    event.preventDefault();
    const nome2 = document.getElementById('nome2').value;
    let mensagemCaracter = document.getElementById("mensagemCaracter2");
    let simboloJogador2 = (simbolo2.innerHTML === "X") ? 'X' : 'O';

    if (nome2.length > 20) {
        event.preventDefault();
        mensagemCaracter.innerHTML = "O nome do jogador não pode passar de 20 caracteres";
        return;
    }
    else if(nome2.length === 0){
        event.preventDefault();
        mensagemCaracter.innerHTML = 'Esse campo é obrigatório'
        return
    }
    else{
        mensagemCaracter.innerHTML = ''
    }
    
    event.preventDefault();
    armazenaJogador(nome2, simboloJogador2, 2);
    modal2.close()
    jogar()
});
