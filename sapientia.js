function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "sapientia") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='sapientia.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
