function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "florença") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='florenca.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
