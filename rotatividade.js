function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "incompreendida") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='incompreendida.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
