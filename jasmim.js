function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "morbi") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='morbi.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
