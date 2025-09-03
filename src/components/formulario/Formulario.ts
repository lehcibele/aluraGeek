import { adicionarProduto, limparForms } from "./Formulario.events";

export function Formulario(): HTMLFormElement {
    const formulario = document.createElement('form');
    formulario.className= `
        w-md flex flex-col items-center gap-y-[40px]
        max-md:w-[100%]
    `;

    const titulForm = document.createElement('h2');
    titulForm.textContent = "ADICIONAR PRODUTO:";
    titulForm.className = "w-full text-center font-press text-2xl font-normal w-2/5";

    const inputNomeProduto = criarInput("input-nome-produto", "Nome...");
    const inputValorProduto = criarInput("input-valor-produto", "Valor...");
    const mensagemErro = document.createElement('p');
    mensagemErro.id = "mensagem-erro";
    mensagemErro.className = "text-azul-form text-sm mt-2 hidden";
    mensagemErro.textContent = "Por favor, insira um valor numérico válido."; // texto padrão
    const inputImagemProduto = criarInput("input-imagem-produto", "Imagem...");

    const divContainerButton = document.createElement('div');
    divContainerButton.className = `
        flex gap-[0.8rem] justify-center
    `;  

    const botaoGuardar = criarBotao("Guardar", "btn-guardar", adicionarProduto, "submit");
    const botaoLimpar = criarBotao("Limpar", "btn-limpar", limparForms);

    formulario.append(titulForm, inputNomeProduto, inputValorProduto, mensagemErro, inputImagemProduto, divContainerButton);
    divContainerButton.append(botaoGuardar, botaoLimpar);

    return formulario;
}

// Função para criar inputs
function criarInput(id: string, placeholder: string): HTMLInputElement {
    const input = document.createElement('input');
    input.id = id;
    input.placeholder = placeholder;
    input.className = `
        w-sm h-[58px] border-[3px] border-azul-form rounded-[30px] p-4
        placeholder:font-ibm placeholder:font-semibold placeholder:text-azul-form
        max-md:w-[300px]
       
    `;
    return input;
}

// Função para criar botões
function criarBotao(texto: string, id: string, evento: (e: Event) => void, type: "button" | "submit" = "button"): HTMLButtonElement {
    const botao = document.createElement('button');
    botao.id = id;
    botao.type = type;
    botao.textContent = texto;
    botao.addEventListener('click', evento);
    botao.className = `
        w-46 h-[55px] border-[3px] border-azul-form rounded-[15px] text-azul-form font-ibm font-medium text-xl hover:bg-fundo-header hover:border-fundo-header hover:text-white
        max-md:w-[140px]
    `;
    return botao;
}