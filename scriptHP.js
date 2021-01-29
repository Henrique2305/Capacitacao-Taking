const botao = document.querySelector("#btn-pesquisar");
botao.addEventListener("click", infosDoEvento => {
    fetch(`https://www.potterapi.com/v1/sortinghat`)
        .then(respostaDoServer => {
            return respostaDoServer.json();
        })
        .then(dados => {
            console.log(dados);
            alert("Your house is " + dados)
        })
});