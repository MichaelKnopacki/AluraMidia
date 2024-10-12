/* 

Um JavaScript que percorra a lista de teclas do AluraFone, e ao clicar na tecla Enter ou Espaço, adicione a classe ativa no elemento e também resolva o momento de retirar a classe ativa do elemento. 

-> index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="src/style.css" />
  </head>
  <body>
    <h1>Alura Fone</h1>
    <input type="tel" placeholder="Digite seu telefone" />
    <section class="teclado">
      <input onclick="teste1()" type="button" value="1" />
      <input type="button" value="2" />
      <input type="button" value="3" />
      <input type="button" value="4" />
      <input type="button" value="5" />
      <input type="button" value="6" />
      <input type="button" value="7" />
      <input type="button" value="8" />
      <input type="button" value="9" />
      <input type="button" value="*" />
      <input type="button" value="0" />
      <input type="button" value="#" />
      <script src="src/script.js"></script>
    </section>
  </body>
</html>

-> style.css

 {
  box-sizing: border-box;
  margin: 0;
  padding: 0; 
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #191919;
  min-height: 100vh;
}

input {
  border: none;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: #fff;
}

.teclado {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px; 

  background-color: #cccccc;
  border-radius: 30px;

  padding: 10px;
}

input[type=button] {
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  height: 80px;
  width: 80px;
}

input[type=tel] {
  background-color: #cccccc;
  border-radius: 10px;
  font-family: monospace;
  font-size: 22px;
  height: 40px;
  margin-bottom: 24px;
  padding: 10px;
  text-align: center;
  width: 280px;
}

.ativa {
  background-color: yellow;
}

1 ) percorra a lista de teclas do AluraFone

-> main.js

const botoes = document.querySelectorAll('input[type=button]');
console.log(botoes);

for (contador = 0; contador < botoes.length; contador++){
  //Imprime o número do contador;
  //console.log("Botões " + contador);
  //Imprime o elemento do botão
  console.log(botoes[contador])

}

2 ) adicione a classe ativa no elemento e também resolva o momento de retirar a classe ativa do elemento

-> main.js






*/