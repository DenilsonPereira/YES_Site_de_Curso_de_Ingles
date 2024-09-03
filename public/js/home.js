window.addEventListener("load", main);

function main(){
    //Primeira sessão da homepage
    const section1 = document.getElementById("section1");
    const divText = document.createElement("div");
    const titulo1 = document.createElement("h1");
    const subtitulo = document.createElement("h2");
    const paragrafo1 = document.createElement("p");
    const btn1 = document.createElement("a");
    const divImg = document.createElement("div");
    const imagem1 = document.createElement("img");

    titulo1.textContent = "Viva a experiência";
    subtitulo.textContent = "A melhor escola da região";
    paragrafo1.textContent = "Inglês para crianças, jovens e adultos";
    btn1.textContent = "Saiba mais";
    btn1.href = "../contato.html";

    imagem1.src = "../image/3.jpg";
    imagem1.alt = "Mãe e filho olhando para computador";

    divText.appendChild(titulo1);
    divText.appendChild(subtitulo);
    divText.appendChild(paragrafo1);
    divText.appendChild(btn1);

    divImg.appendChild(imagem1);

    section1.appendChild(divText);
    section1.appendChild(divImg);

    //Segunda sessão da homepage
    const section2 = document.getElementById("section2");
    const divImg2 = document.createElement("div");
    const imagem2 = document.createElement("img");
    const imagem3 = document.createElement("img");
    const divText2 = document.createElement("div");
    const titulo2 = document.createElement("h1");
    const paragrafo2 = document.createElement("p");
    const btn2 = document.createElement("a");

    imagem2.src = "../image/4.jpg";
    imagem2.alt = "Jovens olhando para um notebook";

    imagem3.src = "../image/1.jpg";
    imagem3.alt = "Moça sorrindo e olhando para a frente";

    titulo2.textContent = "Método Exclusivo";
    paragrafo2.textContent = "A nossa exclusiva metodologia Face-to-face conta com turmas reduzidas de até 08 alunos, niveladas por faixa etária e nível de conhecimento, voltada totalmente para conversação e com tecnologia que potencializa o aprendizado.";
    btn2.textContent = "CONHEÇA NOSSOS CURSOS";
    btn2.href = "../cursos.html";

    divText2.appendChild(titulo2);
    divText2.appendChild(paragrafo2);
    divText2.appendChild(btn2);

    divImg2.appendChild(imagem2);
    divImg2.appendChild(imagem3);

    section2.appendChild(divImg2);
    section2.appendChild(divText2);

    //Terceira sessão da homepage
    faq();
}

let duvidas;

async function faq(){
    const dados = await fetch("http://127.0.0.1:3000/api/duvidas");
    const dadosPuros = await dados.json();

    duvidas = dadosPuros;

    console.log(duvidas);

    const section3 = document.getElementById("section3");
    
    const tituloFaq = document.createElement("h1");
    tituloFaq.textContent = "Faq(Perguntas frequentes):";
    section3.appendChild(tituloFaq);

    for(let x = 0; x < duvidas.length; x++){
        //Criar elementos do curso
        const lista = document.createElement("ol");
        const item = document.createElement("li");
        const detalhes = document.createElement("details");
        const summary = document.createElement("summary");
        const resposta = document.createElement("p");

        summary.textContent = duvidas[x].id + " " + duvidas[x].question;
        resposta.textContent = duvidas[x].response;

        detalhes.appendChild(summary);
        detalhes.appendChild(resposta);

        item.appendChild(detalhes);
        item.className = "faq";

        lista.appendChild(item);

        section3.appendChild(lista);
    }

}