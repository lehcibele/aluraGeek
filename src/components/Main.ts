import { Formulario } from "./formulario/Formulario";
import { ProdutosCards } from "./ProdutosCards";

export function Main(): HTMLElement {
    const main = document.createElement('main');
    
    const form = Formulario();
    const cards = ProdutosCards();

    main.className = "flex justify-center mt-[7%]"

    main.appendChild(cards);
    main.appendChild(form);

    return main;
}