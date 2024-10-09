/*

Para realizar os exercícios utilizei : https://playcode.io/javascript

---------------------------------------------------------------------------------------------------------------------------------------------------------------

1) Incrementando o contador no console: Imagine que você está desenvolvendo um aplicativo web interativo e deseja implementar uma funcionalidade de contagem. 
Cada vez que um botão é clicado, um contador deve ser incrementado em 1, e o valor atualizado do contador deve ser exibido no console do navegador. 
Sua tarefa é criar esta funcionalidade utilizando JavaScript.

Resposta:

-> Index.html:
<button onclick="incremento()"></button>  

-> script.js:
contador = 0;
console.log("Inicio :" + contador);

function incremento(){
  contador++;
  console.log("Contador : " + contador)
}

---------------------------------------------------------------------------------------------------------------------------------------------------------------

2) Criando um array de botões:Crie uma variável que guarde a lista com todos os botões da página, depois printe essa lista no console do seu navegador. 
Para fazer essas ações, utilize um método do JavaScript que recebe como parâmetro a mesma classe de todos os botões.

-> Index.html

<input type="button" class="meuBotao" value="1"/>
<input type="button" class="meuBotao" value="2"/>
<input type="button" class="meuBotao" value="3"/>
<input type="button" class="meuBotao" value="4"/>
<input type="button" class="meuBotao" value="5"/>

-> Script.js

const botoes = document.querySelectorAll('.meuBotao');
// a variável "botoes" recebe todos os botões existentes com a classe "meuBotao"
console.log(botoes);
console.log("Quantidade de  botões " + botoes.length);


for (let i =0; i < botoes.length; i++){
console.log("Botão " + botoes[i].value)
}
// Foi criado um laço de repetição FOR para que percorra todos os botoes com base na quantidade de botoes que tenham atribuído como classe "meuBotao";
// O console log simplesmente imprime o valor conforme o vai incrementando o "i";

---------------------------------------------------------------------------------------------------------------------------------------------------------------

3) Trabalhando com arrays para incrementar um contador: Você está desenvolvendo um aplicativo de teclado MIDI virtual em JavaScript 
e já realizou o desafio de selecionar todos os botões de um array: utilizar um método para selecionar todos os botões de uma só vez no console. 
Sua tarefa é refatorar a função criada anteriormente para que ela seja capaz de incrementar o contador em 1, e o valor atualizado do contador deve ser exibido 
no console do navegador, sempre que o quarto elemento do array de botões for clicado.

-> Index.html

    <input type="button" class="meuBotao" value="1"/>
    <input type="button" class="meuBotao" value="2"/>
    <input type="button" class="meuBotao" value="3"/>
    <input type="button" class="meuBotao" value="4"/>
    <input type="button" class="meuBotao" value="5"/>
    
-> Script.js

const botoes = document.querySelectorAll('.meuBotao');
console.log(botoes);
console.log("Quantidade de  botões " + botoes.length);


for (let i =0; i < botoes.length; i++){
  console.log("Botão " + botoes[i].value)
}


---------------------------------------------------------------------------------------------------------------------------------------------------------------

*/