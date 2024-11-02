/* 
Um JavaScript que percorra a lista de teclas do AluraFone, e ao clicar na tecla Enter ou Espaço, 
adicione a classe ativa no elemento e também resolva o momento de retirar a classe ativa do 
elemento.
*/

const botoes = document.querySelectorAll('input[type=button]');
//console.log(botoes);

for (let contador = 0; contador < botoes.length; contador++) {
  //Imprime o número do contador;
  //console.log("Botões " + contador);
  //Imprime o elemento do botão
  //console.log(botoes[contador])

  const tecla = botoes[contador];
  //console.log(tecla);

  tecla.onkeydown = function (evento) {
    //console.log(evento.code === 'Space' || evento.code === 'Enter');
    if ( evento.code === 'Space' || evento.code === 'Enter' ){
      tecla.classList.add('ativa');
      //console.log('ativado');
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
    //console.log('removido');
  };
}