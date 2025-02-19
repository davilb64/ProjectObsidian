function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "serenus") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='fim.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
