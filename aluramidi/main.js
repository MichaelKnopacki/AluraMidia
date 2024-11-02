function tocaSom(idElementoAudio) {
    
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;


    tecla.onclick = function() {
        tocaSom(idAudio);
    };
    
    
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }

    tecla.onkeydown = function (evento) {
        console.log(evento.code === 'Space' || evento.code === 'Enter');
        if ( evento.code === 'Space' || evento.code === 'Enter' ){
          tecla.classList.add('ativa');
          //console.log('ativado');
        }
      };
    
      tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
        //console.log('removido');
      };

    // console.log(contador);

}


