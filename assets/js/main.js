let texto = document.querySelector("textarea");
let botaoCriptografa = document.querySelector(".botao-criptografar");
let botaoDescriptografa = document.querySelector(".botao-descriptografar");
let msgDisplay = document.querySelector('#mensagem__decodificada');

function criptografaTexto(){
    let codifica = texto.value;
    let textoCriptografado = codifica
    .replace(/e/gi,'enter')
    .replace(/i/gi,'imes')
    // /elemento/gi -> pega todos os elementos seja maiusculo ou minusculo e substitui pelo parâmetro dado, nesse exemplo eu quero pegar todas as letras 'i' e substituir po 'imes';
    .replace(/a/gi, 'ai')
    .replace(/o/gi,'ober')
    .replace(/u/gi,'ufat');
    
    
    console.log(textoCriptografado);
    document.getElementById('mensagem__decodificada').innerHTML = '<textarea readonly id="resultado">' + textoCriptografado + '</textarea>' + '<button class="botao-copiar" id="copiar" onclick="copia()">Copiar</button>';
    //só funciona com id aparentemente
}

function descriptografaTexto(){
    let decodifica = texto.value;
    let textoDecofidicado = decodifica
    .replace(/imes/gi,'i')
    .replace(/enter/gi,'e')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi,'o')
    .replace(/ufat/gi,'u');
    console.log(textoDecofidicado);

    document.getElementById('mensagem__decodificada').innerHTML = '<textarea class="mensagem__resultado" readonly id="resultado" >' + textoDecofidicado + '</textarea>' + '<button class="botao-copiar" id="copiar" onclick="copia()">Copiar</button>';
}

function copia() {
    let copyText = document.getElementById("resultado");
    copyText.select();
    document.execCommand('copy');
  }
  



botaoCriptografa.onclick = criptografaTexto;
botaoDescriptografa.onclick = descriptografaTexto;