function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "ouvidos atentos") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='ouvidos.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
