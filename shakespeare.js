function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "rotatividade") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='rotatividade.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
