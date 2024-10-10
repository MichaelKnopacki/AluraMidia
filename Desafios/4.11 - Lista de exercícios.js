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

4) Utilizando método while para aplicar contador : 
No aplicativo de teclado MIDI virtual, você se deparou com um novo desafio: Utilize o método while para aplicar a funcionalidade de incrementar um contador em mais um, 
e o valor atualizado do contador deve ser exibido no console do navegador. Agora, isso deve acontecer cada vez que algum botão da lista de botões for clicado.

-> Index.html

<input onclick="clicado(event)" type="button" class="meuBotao" value="1" />
<input onclick="clicado(event)" type="button" class="meuBotao" value="2" />
<input onclick="clicado(event)" type="button" class="meuBotao" value="3" />
<input onclick="clicado(event)" type="button" class="meuBotao" value="4" />
<input onclick="clicado(event)" type="button" class="meuBotao" value="5" />

-> Script.js

const botoes = document.querySelectorAll('.meuBotao');
//console.log(botoes);
//console.log('Quantidade de  botões ' + botoes.length);

//Criada uma variável onde é guardado o value do quarto elemento
const quartoElemento = botoes[4];
console.log('Quarto elemento : ' + quartoElemento.value);

//Imprime no console um valor quando um botão é clicado
function clicado(event) {
  console.log(event.target.value);
  //Qualquer botão QUALQUER botão for clicado a condição ENQUANTO é ativada
  i = 0;
  // condição de ENQUANTO i for menor que a quantidade de botões ele executa o que está na função.
  while (i < botoes.length) {
    console.log('Botão ' + botoes[i].value);
    i = i + 1;
  }
}

---------------------------------------------------------------------------------------------------------------------------------------------------------------

5) Utilizando método for para aplicar contador : 
Chegaram nova demandas no aplicativo de teclado MIDI virtual: Refatore o código realizado anteriormente nesta lista de exercícios, 
utilizando o método for do JavaScript para realizar a mesma tarefa, incrementar o contador em mais um, e exibir o resultado no console do navegador, cada vez que algum botão da lista de botões for clicado.

-> Index.html

<input onclick="clicado(event)" type="button" class="meuBotao" value="1" />
<input onclick="clicado(event)" type="button" class="meuBotao" value="2" />
<input onclick="clicado(event)" type="button" class="meuBotao" value="3" />
<input onclick="clicado(event)" type="button" class="meuBotao" value="4" />
<input onclick="clicado(event)" type="button" class="meuBotao" value="5" />

-> Script.js

const botoes = document.querySelectorAll('.meuBotao');
//console.log(botoes);
//console.log('Quantidade de  botões ' + botoes.length);

//Criada uma variável onde é guardado o value do quarto elemento
const quartoElemento = botoes[4];
console.log('Quarto elemento : ' + quartoElemento.value);

//Imprime no console um valor quando um botão é clicado
function clicado(event) {
  console.log(event.target.value);
  //Qualquer botão QUALQUER botão for clicado a condição ENQUANTO é ativada

  // condição de FOR i for menor que a quantidade de botões ele executa o que está na função.
  for (i = 0; i < botoes.length; i++) {
    console.log('Botão ' + botoes[i].value);
  }
}

*/