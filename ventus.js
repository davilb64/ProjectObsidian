function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "ventus") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='ventus.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
