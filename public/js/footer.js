window.addEventListener("load", main);

function main() {
    const footer = document.getElementById("footer");

    // Criando os elementos
    const hr = document.createElement('hr');
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');

    const logoDiv = document.createElement('div');
    const logoImg = document.createElement('img');
    logoImg.src = 'image/logo1.png';
    logoImg.alt = 'Logo da escola de idiomas YES na cor vermelha';
    logoDiv.appendChild(logoImg);

    const footerMenu = document.createElement('div');
    footerMenu.classList.add('footer_menu');

    // Seção de Cursos
    const cursosDiv = document.createElement('div');
    const cursosH2 = document.createElement('h2');
    cursosH2.textContent = 'Cursos';
    cursosDiv.appendChild(cursosH2);

    const cursosUl = document.createElement('ul');
    const cursosItems = [
        { href: 'cursos.html', text: 'Ingles Kids' },
        { href: 'cursos.html', text: 'Ingles Teens' },
        { href: 'cursos.html', text: 'Ingles Adults' },
        { href: 'cursos.html', text: 'Ingles Online' },
    ];

    cursosItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        cursosUl.appendChild(li);
    });

    cursosDiv.appendChild(cursosUl);

    // Seção Institucional
    const institucionalDiv = document.createElement('div');
    const institucionalH2 = document.createElement('h2');
    institucionalH2.textContent = 'Institucional';
    institucionalDiv.appendChild(institucionalH2);

    const institucionalUl = document.createElement('ul');
    const institucionalItems = [
        { href: 'sobre.html', text: 'História' },
        { href: 'contato.html', text: 'Trabalhe Conosco' },
    ];

    institucionalItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        institucionalUl.appendChild(li);
    });

    institucionalDiv.appendChild(institucionalUl);

    // Seção de Endereço
    const enderecoDiv = document.createElement('div');
    const enderecoH2 = document.createElement('h2');
    enderecoH2.textContent = 'Endereço';
    enderecoDiv.appendChild(enderecoH2);

    const enderecoUl = document.createElement('ul');
    const enderecoItems = [
        { text: 'Av. Jonas 100, Centro' },
        { text: 'Garanhuns – PE' },
        { href: 'mailto:mail@mail.com', text: 'mail@mail.com' },
        { href: 'tel:+558737000000', text: '(87) 3700-0000' },
    ];

    enderecoItems.forEach(item => {
        const li = document.createElement('li');
        if (item.href) {
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            li.appendChild(a);
        } else {
            li.textContent = item.text;
        }
        enderecoUl.appendChild(li);
    });

    enderecoDiv.appendChild(enderecoUl);

    // Ícones sociais
    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons');

    const socialIcons = [
        { class: 'bx bxl-facebook bx-sm', href: '#' },
        { class: 'bx bxl-instagram bx-sm', href: '#' },
        { class: 'bx bx-x bx-sm', href: '#' },
    ];

    socialIcons.forEach(icon => {
        const a = document.createElement('a');
        a.href = icon.href;
        const i = document.createElement('i');
        i.className = icon.class;
        a.appendChild(i);
        iconsDiv.appendChild(a);
    });

    // Montando a estrutura do footer
    enderecoDiv.appendChild(iconsDiv);
    footerMenu.appendChild(cursosDiv);
    footerMenu.appendChild(institucionalDiv);
    footerMenu.appendChild(enderecoDiv);
    footerContent.appendChild(logoDiv);
    footerContent.appendChild(footerMenu);

    // Adicionando ao DOM
     footer.appendChild(hr);
     footer.appendChild(footerContent);

    const copyrightDiv = document.createElement('div');
    copyrightDiv.classList.add('copyright');
    const copyrightP = document.createElement('p');
    copyrightP.innerHTML = '&copy; 2024 YES - Escola de Idiomas';
    copyrightDiv.appendChild(copyrightP);

    footer.appendChild(copyrightDiv);
}