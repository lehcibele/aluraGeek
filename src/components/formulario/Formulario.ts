export function Formulario(): HTMLFormElement {
    const formulario = document.createElement('form');
    const titulForm = document.createElement('h2');
    const inputNomeProduto = document.createElement('input');
    const inputValorProduto = document.createElement('input');
    const inputImagemProduto = document.createElement('input');
    const botaoGuardar = document.createElement('button');
    const botaoLimpar = document.createElement('button');

    formulario.className= "flex flex-col gap-y-[40px]"

    titulForm.textContent = "ADICIONAR PRODUTO:";
    titulForm.className = "w-full text-center font-press text-2xl font-normal w-2/5";

    inputNomeProduto.id = "input-nome-produto";
    inputNomeProduto.placeholder = "Nome..."
    inputNomeProduto.className = `
        w-sm h-[58px] border-[3px] border-azul-form rounded-[30px] p-4
        placeholder:font-ibm placeholder:font-semibold placeholder:text-azul-form
    `;

    inputValorProduto.id = "input-valor-produto";
    inputValorProduto.placeholder = "Valor...";
    inputValorProduto.className = `
        w-sm h-[58px] border-[3px] border-azul-form rounded-[30px] p-4
        placeholder:font-ibm placeholder:font-semibold placeholder:text-azul-form
    `;

    inputImagemProduto.id = "input-imagem-produto";
    inputImagemProduto.placeholder = "Imagem...";
    inputImagemProduto.className = `
        w-sm h-[58px] border-[3px] border-azul-form rounded-[30px] p-4
        placeholder:font-ibm placeholder:font-semibold placeholder:text-azul-form
    `;

    botaoGuardar.id = "btn-guardar";
    botaoGuardar.type = "submit"
    botaoGuardar.textContent = "Guardar";
    botaoGuardar.className = `
        w-48 h-[55px] bg-azul-form text-white rounded-[15px] font-ibm font-medium text-xl hover:bg-fundo-header
    `;

    botaoLimpar.id = "btn-limpar";
    botaoLimpar.textContent = "Limpar";
    botaoLimpar.className = `
        w-48 h-[55px] border-[3px] border-azul-form rounded-[15px] text-azul-form font-ibm font-medium text-xl hover:bg-fundo-header
    `;

    formulario.appendChild(titulForm);
    formulario.appendChild(inputNomeProduto);
    formulario.appendChild(inputValorProduto);
    formulario.appendChild(inputImagemProduto);
    formulario.appendChild(botaoGuardar);
    formulario.appendChild(botaoLimpar);

    return formulario;
}