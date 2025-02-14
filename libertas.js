function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "libertas") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='libertas.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
