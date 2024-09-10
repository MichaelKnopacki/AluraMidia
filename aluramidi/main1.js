//Esse foi a primeira versão do código funcional.

const listaDeTeclas = document.querySelectorAll('.tecla');
// Seleciona todos os elementos com a classe 'tecla' e os armazena em uma NodeList (como um array).

let contador = 0;
// Inicializa um contador que será usado para percorrer a lista de teclas.

while (contador < listaDeTeclas.length) {
    // Loop que percorre cada elemento da lista de teclas.

    const tecla = listaDeTeclas[contador];
    // Seleciona a tecla atual com base no índice do contador.

    const instrumento = tecla.classList[1];
    // Obtém a segunda classe da tecla, que representa o nome do instrumento (ex.: 'piano', 'bateria').

    const idAudio = `#som_${instrumento}`;
    // Cria o ID do elemento de áudio correspondente ao instrumento (ex.: '#som_piano').

    tecla.onclick = function () {
        // Define um evento de clique para a tecla atual.
        tocaSom(idAudio);
        // Quando a tecla é clicada, a função 'tocaSom' é chamada com o ID do áudio correspondente.
    };

    contador++;
    // Incrementa o contador para passar à próxima tecla.
}