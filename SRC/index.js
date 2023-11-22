
const botoes = document.querySelectorAll ('.botao');
//personagem lista = personagens//
const personagens = document.querySelectorAll('.personagem');




//pesquisa metdo AddEventLisst// queryselector (busca um seletor uma tag )
botoes.forEach( (botao, indice) => {
   botao.addEventListener("click", () => {
/* verificar se já existe um botão selecionado, se sim, devemos remover 
a seleção dele */
    //refatorar: global
       desselecionar();



// adicionar a classe "selecionado" no personagem que o usuário selecionou//
    botao.classList.add("selecionado");


   /* quando clicar no botão do personagem mostrar as informações do personagem*/

   //verificar se já exista um personagem selecionado, se sim, devemos remover// 
   const personagemSelecionado = document.querySelector(".personagem.selecionado")
   personagemSelecionado.classList.remove("selecionado")



   //adicionar a classe "selecionado" no personagem que o usuário selecionou//
    personagens[indice].classList.add("selecionado");

});
});


function desselecionar() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove('selecionado');
}

