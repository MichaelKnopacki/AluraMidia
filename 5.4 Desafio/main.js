const botoes = document.querySelectorAll('input[type=button]');
//console.log(botoes);

for (let contador = 0; contador < botoes.length; contador++) {
  //Imprime o número do contador;
  //console.log("Botões " + contador);
  //Imprime o elemento do botão
  //console.log(botoes[contador])

  const tecla = botoes[contador];
  //console.log(tecla);

  tecla.onkeydown = function () {
    tecla.classList.add('ativa');
    console.log('ativado');
  };

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
    console.log('removido');
  };
}