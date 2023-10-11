function tocaSom(seletorAudio) {
    const elemento = documento.querySelector(seletorAudio);
    if(elemento &&  elemento.LocalName === 'audio') {
        elemento.play();
    }
    else {
        // alert('Elemento nao encontrado');
        console.log('elemento não encontrado ou seletor invalido.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');
//paro
for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idaudio = #som_${instrumento};
    tecla.onclick = function() {
        tocaSom(idaudio);
    }
    tecla.onkeydown = function(evento) {
        if(evento.code === 'SPACE' || evento.code === 'ENTER') {
            tecla.classList.add('ativo');
        }
    }

    tecla.onkeyup = function() {
        tecla.classlist = remove('ativa');
    }
}

