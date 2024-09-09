function tocaSom (idElementoAudio){
    //alert("Usando a função");
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
console.log(listaDeTeclas);

let contador = 0;

while ( contador < listaDeTeclas){
    listaDeTeclas[contador].onclick = tocaSom;
    contador++;

    //console.log(contador);
}