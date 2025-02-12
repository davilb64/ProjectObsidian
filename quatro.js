function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "marcel o cruel") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='marcel.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
