
var mensagemUsuario = document.querySelector("#caixa"); 
 var mensagemCriptografada = document.querySelector(".msg");   
 var copiarMensagem = document.querySelector(".botao3"); 
  

function btnEncriptar() { 
  
    var mensagem = mensagemUsuario.value; 
 
    var criptografado = mensagem.replace(/e/g, "enter") 
        .replace(/i/g, "imes") 
        .replace(/a/g, "ai") 
        .replace(/o/g, "ober") 
        .replace(/u/g, "ufat") 
        .replace(/E/g, "enter") 
        .replace(/I/g, "imes") 
        .replace(/A/g, "ai") 
        .replace(/O/g, "ober") 
        .replace(/U/g, "ufat"); 
 
        /*  Podemos esrever o replace " Substituir " também desta forma. 
            .replaceAll("e","enter") 
        */ 
    mensagemCriptografada.value = criptografado; 
} 
 
    function btnDesencriptar() { 
 
        var mensagem = mensagemUsuario.value; 
 
        var descriptografa = mensagem.replace(/enter/g, "e") 
            .replace(/imes/g, "i") 
            .replace(/ai/g, "a") 
            .replace(/ober/g, "o") 
            .replace(/ufat/g, "u") 
            .replace(/ENTER/g, "e") 
            .replace(/IMES/g, "i") 
            .replace(/AI/g, "a") 
            .replace(/OBER/g, "o") 
            .replace(/Ufat/g, "u") 
            .replace(/Enter/g, "e") 
            .replace(/Imes/g, "i") 
            .replace(/Ai/g, "a") 
            .replace(/Ober/g, "o") 
            .replace(/Ufat/g, "u"); 
 
        mensagemCriptografada.value = descriptografa; 
    } 
    function btnCopiar() {
       let textoCopiado = document.getElementsByClassName("msg")[0];
       textoCopiado.select();
       textoCopiado.setSelectionRange(0,99999);
       
       document.execCommand("copy");
   
       
   
       alert ("Texto copiado com sucesso!");
  
    }
 
  
