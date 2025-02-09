function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "estejamos") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='estejamos.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
