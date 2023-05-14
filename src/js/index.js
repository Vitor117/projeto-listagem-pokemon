// passo 1 - pegar noJS o elemento HTML correspondente ao botção de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// psso 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//paaso 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    // passo 6 - verificar se tem a class modo-escuro no body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo) {
        // troca de imagem de lua para sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    }else {
    // passo 5 - trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")


 }
});