
function constroiTabela() {
    const cabecalhoTabela = document.querySelector(".cabecalho");
    let qtdLinhas = 0;
    let qtdColunas = 0;
    while (qtdLinhas !== 3) {
        let linha = document.createElement('tr');
        while (qtdColunas !== 3) {
            let celula = document.createElement('td')
            let botao = document.createElement('button')
            celula.classList.add('celula')
            botao.classList.add('botaoCelula')

            celula.appendChild(botao)
            linha.appendChild(celula)
            cabecalhoTabela.appendChild(linha);
            qtdColunas += 1;
        }
        qtdColunas = 0
        qtdLinhas += 1
    }
    
}
window.onload = constroiTabela();