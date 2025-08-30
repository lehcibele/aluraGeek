export const produtos: {
    nome: string;
    valor: string;
    imagem: string;
}[] = [];

export function adicionarProduto(e: Event) {
    e.preventDefault(); // impede o realod da página ao clicar no botão guardar

    const nome = (document.getElementById('input-nome-produto') as HTMLInputElement).value;
    const valor = (document.getElementById('input-valor-produto') as HTMLInputElement).value;
    const imagem = (document.getElementById('input-imagem-produto') as HTMLInputElement).value;

    produtos.push({nome, valor, imagem}); // adicionar ao array global

    console.log(produtos);

    return {nome, valor, imagem};

}

// Limpar forms ao clicar no botão Limpar
export function limparForms(e: Event) {
    e.preventDefault();

    // Seleciona os inputs e limpa os valores
    (document.getElementById('input-nome-produto') as HTMLInputElement).value = "";
    (document.getElementById('input-valor-produto') as HTMLInputElement).value = "";
    (document.getElementById('input-imagem-produto') as HTMLInputElement).value = "";

}