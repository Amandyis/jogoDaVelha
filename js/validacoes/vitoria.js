export function verificarVitoria(campoSimbolo) {
    const combinações = [
        // linhas
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // colunas
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // diagonais
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combinação of combinações) {
        const [a, b, c] = combinação;
        console.log(combinação)
        if (campoSimbolo[a].innerHTML && campoSimbolo[a].innerHTML === campoSimbolo[b].innerHTML && campoSimbolo[a].innerHTML === campoSimbolo[c].innerHTML) {
            return campoSimbolo[a].innerHTML;
        }
    }
    return null;
}