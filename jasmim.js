function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "jasmim") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='jasmim.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
