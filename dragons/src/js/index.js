//pegar elemento html dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
//identificar click do usuario
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".selecionado");
        const imagemAtiva = document.querySelector(".imagem.ativa");
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        
        botaoSelecionado.classList.remove("selecionado");
        imagemAtiva.classList.remove("ativa");
        informacoesAtiva.classList.remove("ativa");

        botao.classList.add("selecionado");
        imagens[indice].classList.add("ativa");
        informacoes[indice].classList.add("ativa");
    });
}); 
