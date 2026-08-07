const botao = document.querySelector("Button");
botao.addEventListener("click", botaoclicado);

function botaoclicado(){

    let texto = botao.querySelector("span");
    texto.textContent++;
    


}