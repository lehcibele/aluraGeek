

export function ProdutosCards(): HTMLElement {
    const card = document.createElement('div');
    card.textContent = "Cards do Produto";
    card.className = "w-3/5";

    return card;
}