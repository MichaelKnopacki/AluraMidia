

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------

Você trabalha com desenvolvimento web e está aprimorando um projeto de teclado musical virtual, o "Alura Midi". 
Utilize o conhecimento adquirido nesta aula para utilizar um método que seleciona todos os botões do projeto de uma só vez, através de sua classe.

Resposta: 
document.querySelectorAll('.tecla');

-------------------------------------------------------------------------------------------------------------------------------------------------------------

Desta vez, sua tarefa é guardar todos esses botões que podem ser selecionados através de suas classes de mesmo nome, e guardá-los em uma variável. Dessa forma, será possível aplicar funcionalidades a todos eles de uma só vez.

Resposta: 
const listaDeTeclas = document.querySelectorAll('.tecla');

-------------------------------------------------------------------------------------------------------------------------------------------------------------

Vamos continuar o desenvolvimento do projeto virtual "Alura MIDI"? Sua próxima tarefa, é acessar o primeiro elemento da lista de teclas, listaDeBotoes. 
Para fazer isso, utilize a sintaxe que acessa determinados elementos de uma lista, também chamado de array no JavaScript.

Resposta:
listaDeTeclas[0]
console.log(listaDeTeclas[0]);

-------------------------------------------------------------------------------------------------------------------------------------------------------------

Nova tarefa! Atribua a função tocaSomPom ao evento onclick da tecla correspondente ao índice 0 da lista. Lembre-se de que você não deve usar parênteses ao passar a referência da função para evitar a execução imediata dela.

Resposta:
listaDeTeclas[0].onclick = tocaTeclaPom;

-------------------------------------------------------------------------------------------------------------------------------------------------------------

Sua missão da vez é utilizar a mesma lógica de atribuir funções a elementos da lista, porém agora para tocar o arquivo de áudio com o nome TocaSomClap ao clicar no botão Clap. Esse botão é o segundo elemento da lista de elementos.

Resposta:
function tocaTeclaClap(){
    document.querySelector('#som_tecla_clap').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[1].onclick = tocaTeclaClap;

-------------------------------------------------------------------------------------------------------------------------------------------------------------*/



