function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "Talvez") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='Talvez.html'>Próximo desafio</a>";
    } else if (resposta === "Shakespeare") {
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='Shakespeare.html'>Próximo desafio</a>";
    }
    else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
