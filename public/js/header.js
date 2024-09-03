window.addEventListener("load", main);

function main(){
    const header = document.getElementById("header");
    const logo = document.createElement("img");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const home = document.createElement("li");
    const cursos = document.createElement("li");
    const sobre = document.createElement("li");
    const contato = document.createElement("li");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");
    const a4 = document.createElement("a");
    const btn = document.createElement("a");

    //Inserindo conteudo nos elementos
    logo.src = "../image/logo2.png";
    logo.alt = "Logo da escola de idiomas YES";

    a1.href = "../index.html";
    a1.textContent = "Home";

    a2.href = "../cursos.html";
    a2.textContent = "Cursos";

    a3.href = "../sobre.html";
    a3.textContent = "Quem Somos";

    a4.href = "../contato.html";
    a4.textContent = "Contato";

    btn.href = "../login.html";
    btn.textContent = "Área Restrita";
    btn.className = "btnLogin";

    const caminho = window.location.pathname;

    if (caminho.endsWith("index.html")||caminho.endsWith("/")) {
        a1.className = "active";
    } else if (caminho.endsWith("cursos.html")) {
        a2.className = "active";
    } else if (caminho.endsWith("sobre.html")) {
        a3.className = "active";
    } else if (caminho.endsWith("contato.html")) {
        a4.className = "active";
    }

    home.appendChild(a1);
    cursos.appendChild(a2);
    sobre.appendChild(a3);
    contato.appendChild(a4);

    ul.appendChild(home);
    ul.appendChild(cursos);
    ul.appendChild(sobre);
    ul.appendChild(contato);

    nav.appendChild(ul);
    nav.appendChild(btn);

    header.appendChild(logo);
    header.appendChild(nav);
}