let texto = document.getElementsByClassName('texto')
let botaoCriptografar = document.getElementsByClassName('criptografar')

function criptografaTexto(texto){
    let textoCriptografado = texto.replace('/a/g', 'ai').replace('/e/g','enter').replace('/i/g','imes').replace('/o/g','ober').replace('/u/g','ufat');
    document.write(textoCriptografado);

}

botaoCriptografar.onclick = criptografaTexto;