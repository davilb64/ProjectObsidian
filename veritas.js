function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "veritas") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='veritas.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
