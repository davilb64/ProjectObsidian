function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "originis") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='originis.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
