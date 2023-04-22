let texto = document.querySelector("textarea");
let botaoCriptografa = document.querySelector(".botao-criptografar");
let botaoDescriptografa = document.querySelector(".botao-descriptografar");

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


    document.getElementsByClassName('.mensagem-decodificada').innerHTML = '<textarea readonly id="resultado">' + textoCriptografado + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
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
}

function copia() {
    let copyText = document.querySelector("#input");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector(".botao-copiar").addEventListener("click", copy);


botaoCriptografa.onclick = criptografaTexto;
botaoDescriptografa.onclick = descriptografaTexto;