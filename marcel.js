function verificarResposta() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "413") {  
        document.getElementById("resultado").innerHTML = "✅ Correto! <a href='0413.html'>Próximo desafio</a>";
    } else {
        document.getElementById("resultado").innerHTML = "❌ Errado! Tente novamente.";
    }
}
