import "../style.css";

export function Footer(): HTMLElement {
    const footer = document.createElement('footer');
    footer.className = "h-[200px] mt-[10%] bg-fundo-header flex flex-col justify-center items-center shadow-header max-sm:h-[90px";

    const containerLogo = document.createElement("div");
    containerLogo.className = "flex justify-center items-center";
    // Logo
    const divImg = document.createElement('div');
    divImg.className = "w-[138px] h-[110px] max-sm:w-[100px] max-sm:h-[90px]"
    const imgLogoFooter = document.createElement('img');
    imgLogoFooter.className = "w-full h-full"
    imgLogoFooter.src = 'img/logo-header.png';

    // Titulo do site
    const tituloFooter = document.createElement('h1');
    tituloFooter.textContent = "AluraGeek";
    tituloFooter.className = "font-press text-2xl text-white max-sm:text-lg hover:text-efeito-titulo";
    const linkSite = document.createElement('a');
    linkSite.href = 'index.html';

    // Dev
    const nomeDev = document.createElement("h2");
    nomeDev.textContent = "DESENVOLVIDO POR ";
    nomeDev.className = "font-ibm text-white";

    const linkNome = document.createElement("a");
    linkNome.textContent = "LETICIA CIBELE";
    linkNome.href = "https://github.com/lehcibele";
    linkNome.target = "_blank";
    linkNome.className = "font-ibm text-white hover:text-efeito-titulo";

    divImg.append(imgLogoFooter);
    linkSite.append(tituloFooter);
    nomeDev.appendChild(linkNome);
    containerLogo.append(divImg, linkSite)
    footer.append(containerLogo, nomeDev);

    return footer;

}