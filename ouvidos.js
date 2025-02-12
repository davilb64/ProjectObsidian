function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "quatro") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='quatro.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
