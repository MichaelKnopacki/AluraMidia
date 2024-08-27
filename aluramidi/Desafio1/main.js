function alerta (){
    // Resolução Michael
    let telefone = document.getElementById('tel');
    let telefoneDigitado = telefone.value;
    alert(telefoneDigitado);

    //Resolução Professora
    //document.querySelector('input[type=tel]');
}

/*
Você já sabe como usar o DevTools para inspecionar elementos HTML. 
Agora, está trabalhando em um projeto de site musical e precisa interagir com os botões que representam 
as teclas de um piano. Logo, seu desafio é: utilize o Javascript para selecionar um botão específico na 
sua página.
*/
function digito (){
    let digito = document.getElementById('um');
    let numero = digito.value;
    alert(numero);
}

/*
Imagine que você está trabalhando em um projeto de site que inclui elementos interativos como botões 
que emitem sons, semelhante a um piano. Até o momento, você já aprendeu como emitir o som utilizando
 JavaScript, agora, a sua missão é emitir um alerta escrito “Fui clicado”, em um botão assim que 
 ele receber um clique.
*/
function clicado (){
    alert(' Eu o numero 2, fui clicado');
}

/*
Neste exercício, você enfrentará um desafio comum no desenvolvimento web: garantir consistência de 
design entre diferentes navegadores. Trabalhando com o mesmo projeto do instrumento musical digital, 
você percebeu que o mini player de áudio tem aparências diferentes no Firefox e no Chrome. 
Seu objetivo é personalizar o estilo desse player de áudio usando CSS para que ele tenha uma 
aparência consistente em ambos os navegadores. Como a tag audio é difícil de estilizar diretamente, 
você precisará encontrar uma maneira criativa de contornar essa limitação, talvez usando elementos 
HTML adicionais e CSS para alcançar o design desejado.
*/