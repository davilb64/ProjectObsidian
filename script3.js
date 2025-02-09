function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "circulos") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='desafio1.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
