import { atualizarCards } from "../ProdutosCards";

export const produtos: {
    id: number;
    nome: string;
    valorNum: number;
    imagem: string;
}[] = JSON.parse(localStorage.getItem("produtos") || "[]");

export function adicionarProduto(e: Event) {
    e.preventDefault(); // impede o realod da página ao clicar no botão guardar

    const nome = (document.getElementById('input-nome-produto') as HTMLInputElement).value;
    const valor = (document.getElementById('input-valor-produto') as HTMLInputElement).value;
    const imagem = (document.getElementById('input-imagem-produto') as HTMLInputElement).value;
    const mensagemErro = document.getElementById('mensagem-erro') as HTMLParagraphElement;

    
    const valorNum = Number(valor);
    if (isNaN(valorNum) || valor.trim() === "") {
        mensagemErro.textContent = "Por favor, insira um valor numérico válido.";
        mensagemErro.classList.remove("hidden"); // mostra a mensagem
        return;
    }
    if (valorNum <= 0) {
        mensagemErro.textContent = "O valor deve ser maior que zero.";
        mensagemErro.classList.remove("hidden");
        return;
    }

    // Se estiver tudo certo, oculta a mensagem
    mensagemErro.classList.add("hidden");

    const id = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;
    
    produtos.push({id, nome, valorNum, imagem}); // adicionar ao array global

    salvarNoLocalStorage(); // salva no localStorage
    atualizarCards(); // Atualiza a lista de cards

}

export function removerProduto(id: number) {
    const index = produtos.findIndex(prod => prod.id === id);
    if(index !== -1) {
        produtos.splice(index, 1);
        salvarNoLocalStorage();
        atualizarCards();
    }
}

function salvarNoLocalStorage() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

// Limpar forms ao clicar no botão Limpar
export function limparForms(e: Event) {
    e.preventDefault();

    // Seleciona os inputs e limpa os valores
    (document.getElementById('input-nome-produto') as HTMLInputElement).value = "";
    (document.getElementById('input-valor-produto') as HTMLInputElement).value = "";
    (document.getElementById('input-imagem-produto') as HTMLInputElement).value = "";

}