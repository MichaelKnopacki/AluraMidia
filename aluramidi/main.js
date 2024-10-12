function tocaSom(idElementoAudio) {
    // Função que toca o som do elemento de áudio identificado pelo parâmetro 'idElementoAudio'.
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
// Seleciona todos os elementos que possuem a classe 'tecla' e os armazena em uma NodeList (que é como um array).

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    // Loop 'for' que itera através de todos os elementos da lista de teclas.
    // O contador começa em 0 e vai até o tamanho da lista de teclas menos 1.

    const tecla = listaDeTeclas[contador];
    // Armazena a tecla atual (no índice atual do loop) em uma variável chamada 'tecla'.

    const instrumento = tecla.classList[1];
    // Obtém o nome do instrumento, que está armazenado na segunda classe do elemento 'tecla'.
    // Por exemplo, se a classe for 'tecla piano', 'instrumento' será 'piano'.

    const idAudio = `#som_${instrumento}`;
    // Cria uma string de ID para o elemento de áudio correspondente ao instrumento.
    // Exemplo: se 'instrumento' for 'piano', 'idAudio' será '#som_piano'.

    tecla.onclick = function() {
        // Define uma função para ser executada quando a tecla for clicada.
        tocaSom(idAudio);
        // Chama a função 'tocaSom' passando o 'idAudio', que toca o som do instrumento associado.
    };
    
    
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }

    // console.log(contador);
    // Esse console.log (se descomentado) exibiria o valor do contador a cada iteração do loop.
}


