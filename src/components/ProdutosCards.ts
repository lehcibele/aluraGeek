export function ProdutosCards(): HTMLElement {
    const cardContainer = document.createElement('div');
    cardContainer.textContent = "Cards do Produto";
    cardContainer.className = "w-3xl";

    return cardContainer;
}