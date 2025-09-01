import { atualizarCards } from "../ProdutosCards";

export const produtos: {
    nome: string;
    valorNum: number;
    imagem: string;
}[] = [];

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
    
    produtos.push({nome, valorNum, imagem}); // adicionar ao array global

    atualizarCards(); // Atualiza a lista de cards

}

// Limpar forms ao clicar no botão Limpar
export function limparForms(e: Event) {
    e.preventDefault();

    // Seleciona os inputs e limpa os valores
    (document.getElementById('input-nome-produto') as HTMLInputElement).value = "";
    (document.getElementById('input-valor-produto') as HTMLInputElement).value = "";
    (document.getElementById('input-imagem-produto') as HTMLInputElement).value = "";

}