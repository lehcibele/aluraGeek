import { produtos } from "./formulario/Formulario.events";

const cardContainer = document.createElement('div');
cardContainer.className = "w-3xl h-[500px] overflow-y-scroll";

export function ProdutosCards(): HTMLElement {
    atualizarCards();
    return cardContainer;
}

export function atualizarCards() {
    cardContainer.innerHTML = ""; // limpa os cards antigos

    const tituloProdutos = document.createElement('h2');
    tituloProdutos.textContent = "MEUS PRODUTOS:";
    tituloProdutos.className = "w-full text-center font-press text-2xl";
    cardContainer.appendChild(tituloProdutos);

    if(produtos.length == 0) {
        const textoNenhumCard = document.createElement('p');
        textoNenhumCard.innerHTML = `
            Não existe nenhum produto. <br>
            Adicione Produtos!
        `;
        textoNenhumCard.className = "text-center text-azul-form text-xl mt-[5%]";
        cardContainer.appendChild(textoNenhumCard);
    }

    const containerProdutos = document.createElement('div');
    containerProdutos.className = "flex gap-x-[1%] gap-y-[1%] justify-center flex-wrap"

    produtos.forEach(produto => {
        const cardProduto = document.createElement('div');
        cardProduto.className = "flex flex-col mt-[3%] items-center w-[196px] h-[258px] bg-fundo-card border-[3px] rounded-xl shadow-card";

        cardProduto.innerHTML = `
            <div class="w-[176px] h-[174px] m-[10px] border-[3px] rounded-[5px]">
                <img class="w-[100%] h-[100%]" src=${produto.imagem} alt="${produto.nome}">
            </div>
            
            <h2 class="w-full ml-[15%] font-ibm text-lg text-white ">
                ${produto.nome}
            </h2>
            
            <div class="w-full flex justify-around">
                <p class="text-white font-ibm">R$ ${produto.valorNum.toFixed(2)}</p>
                <img src="img/icon-lixeira.png">
            </div>
        `;
        containerProdutos.appendChild(cardProduto);
    });

    cardContainer.appendChild(containerProdutos);

}