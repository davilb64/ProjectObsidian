function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "dante alighieri") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='dante.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
