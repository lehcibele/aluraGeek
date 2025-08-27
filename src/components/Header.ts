import "../style.css";

export function Header(): HTMLElement {
    // Container Header
    const header = document.createElement('header');
    header.className = "h-[120px] bg-fundo-header flex justify-center items-center shadow-header";

    // Logo
    const divImg = document.createElement('div');
    divImg.className = "w-[138px] h-[110px]"
    const imgLogoHeader = document.createElement('img');
    imgLogoHeader.className = "w-full h-full"
    imgLogoHeader.src = 'img/logo-header.png';

    // Titulo do site
    const tituloHeader = document.createElement('h1');
    tituloHeader.textContent = "AluraGeek";
    tituloHeader.className = "font-press text-2xl text-white hover:text-efeito-titulo";
    const linkSite = document.createElement('a');
    linkSite.href = 'index.html';

    // imagem logo filho da div
    divImg.appendChild(imgLogoHeader);
    // div da imagem filho do Header
    header.appendChild(divImg);
    // tag a pai do titulo 
    linkSite.appendChild(tituloHeader);
    // titulo do header filho do Header
    header.appendChild(linkSite);

    return header;
}
