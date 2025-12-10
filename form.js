const form = document.getElementById("form");


window.addEventListener("submit", (e) => {
    let nome = document.getElementById("nome");
    e.preventDefault;
    alert("Salve"+ nome + "Obrigado por entrar em contato conosco!");
})