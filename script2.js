function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "andando") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='andando.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
