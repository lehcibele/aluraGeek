import { Formulario } from "./formulario/Formulario";
import { ProdutosCards } from "./ProdutosCards";

export function Main(): HTMLElement {
    const main = document.createElement('main');
    
    const form = Formulario();
    const cards = ProdutosCards();

    main.className = `
        flex justify-center gap-[5%] 
        max-xl:max-w-[95%] max-xl:m-auto
        max-md:flex-col-reverse 
    `;

    main.appendChild(cards);
    main.appendChild(form);

    return main;
}