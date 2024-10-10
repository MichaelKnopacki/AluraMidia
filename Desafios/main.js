/*
    const teclas = document.querySelectorAll('input[type=button]');
    console.log(teclas);


Ao rodar o console no navegador o retorno era vazio.
O retorno era vazio, pois o SCRIPT estava antes, assim que coloquei no final do BODY ele retornou os valores corretos.
------------------------------------------------------------------------------------------------

    function alerta (){
        // Resolução Michael
        let telefone = document.getElementById('tel');
        let telefoneDigitado = telefone.value;
        alert(telefoneDigitado);

        //Resolução Professora
        //document.querySelector('input[type=tel]');
    }

------------------------------------------------------------------------------------------------
Você já sabe como usar o DevTools para inspecionar elementos HTML. 
Agora, está trabalhando em um projeto de site musical e precisa interagir com os botões que representam 
as teclas de um piano. Logo, seu desafio é: utilize o Javascript para selecionar um botão específico na 
sua página.

    function digito (){
        let digito = document.getElementById('um');
        let numero = digito.value;
        alert(numero);
    }

------------------------------------------------------------------------------------------------
Imagine que você está trabalhando em um projeto de site que inclui elementos interativos como botões 
que emitem sons, semelhante a um piano. Até o momento, você já aprendeu como emitir o som utilizando
 JavaScript, agora, a sua missão é emitir um alerta escrito “Fui clicado”, em um botão assim que 
 ele receber um clique.

    function clicado (){
        alert(' Eu o numero 2, fui clicado');
}
------------------------------------------------------------------------------------------------
Neste exercício, você enfrentará um desafio comum no desenvolvimento web: garantir consistência de 
design entre diferentes navegadores. Trabalhando com o mesmo projeto do instrumento musical digital, 
você percebeu que o mini player de áudio tem aparências diferentes no Firefox e no Chrome. 
Seu objetivo é personalizar o estilo desse player de áudio usando CSS para que ele tenha uma 
aparência consistente em ambos os navegadores. Como a tag audio é difícil de estilizar diretamente, 
você precisará encontrar uma maneira criativa de contornar essa limitação, talvez usando elementos 
HTML adicionais e CSS para alcançar o design desejado.
*/

/*
------------------------------------------------------------------------------------------------
Um script que percorra a lista de teclas do AluraFone, e ao clicar em qualquer tecla do teclado, imprima o valor no campo Digite seu telefone.

1 ) Um script que percorra a lista de teclas do AluraFone

const listaDeTeclas = document.querySelectorAll('input[type=button]');

    for ( let contador=0; contador < 12; contador ++){
        
    const tecla = listaDeTeclas[contador]
    console.log(tecla);  
    
    }

2 ) Ao clicar em qualquer tecla do teclado, imprima o valor 

    * onclick="clicado(event)" -> Inserido a cada elemento dentro do HTML;

    function clicado(event) {
    console.log(event); // Mostra o objeto de evento no console
    console.log('Tipo de evento:', event.type); // Mostra o tipo de evento (ex.: "click")
    console.log('Elemento alvo:', event.target); // Mostra o elemento que acionou o evento
    console.log('Valor:', event.target.value); // Mostra o elemento que acionou o evento
    }
    

3 ) Quando o botão é clicado ele imprime no campo "Digite seu telefone"

    function clicado(event) {
        const campoTelefone = document.getElementById("tel");
        campoTelefone.value += event.target.value;
    }


4 ) Final:

    // Seleciona todos os elementos de input do tipo botão (teclas) e armazena na variável 'listaDeTeclas'
    const listaDeTeclas = document.querySelectorAll('input[type=button]');

    // Seleciona o input do tipo telefone e armazena na variável 'inputTel'
    const inputTel = document.querySelector('input[type=tel]');

    // Inicia um loop que percorre todas as teclas (botões) da listaDeTeclas
    for (let indice = 0; indice < listaDeTeclas.length; indice++) {
    
    // Armazena a tecla atual na variável 'tecla'
    const tecla = listaDeTeclas[indice];
    
    // Define uma função para ser executada quando a tecla for clicada
    tecla.onclick = function () {
    
        // Concatena o valor do botão clicado ao valor atual do input de telefone
        inputTel.value = inputTel.value + tecla.value;
  }
}


*/