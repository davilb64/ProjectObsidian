function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "muito pouco ama, quem com palavras pode expressar quanto muito ama") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='ama.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
