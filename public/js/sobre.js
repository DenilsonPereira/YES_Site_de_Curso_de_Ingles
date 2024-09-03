window.addEventListener("load", main);

function main(){
    const sectionSobre = document.getElementById("sobre");

    const titulo = document.createElement("h1");
    const subtitulo = document.createElement("h2");
    const paragrafo1 = document.createElement("p");
    const paragrafo2 = document.createElement("p");

    //Adicionando conteudo nos elementos da sectionSobre
    titulo.textContent = "Sobre a YES";
    subtitulo.textContent = "Há mais de 8 anos nos dedicando ao ensino de idiomas e sendo referência no segmento.";
    paragrafo1.textContent = "O YES Idiomas teve início em 2016, em Pernambuco, com a criação de uma exclusiva metodologia de ensino da língua inglesa.";
    paragrafo2.textContent = "Nosso compromisso é contribuir para o fortalecimento intelectual e emocional dos nossos alunos, tornando extremamente simples a comunicação deles com pessoas de todas as partes do mundo.";

    //Adicionando conteudo na tela
    sectionSobre.appendChild(titulo);
    sectionSobre.appendChild(subtitulo);
    sectionSobre.appendChild(paragrafo1);
    sectionSobre.appendChild(paragrafo2);

    //Criando elementos da sectionVisao
    const sectionVisao = document.getElementById("visao");
    const divTextVisao = document.createElement("div");
    const tituloVisao = document.createElement("h1");
    const textoVisao = document.createElement("p");
    const divImgVisao = document.createElement("div");
    const imagemVisao = document.createElement("img");

    imagemVisao.src = "../image/olho.png";
    imagemVisao.alt = "Icone de visão";

    //Div imagem
    divImgVisao.appendChild(imagemVisao);

    //Coteudo de texto visao
    tituloVisao.textContent = "Visão";
    textoVisao.textContent = "Resolutividade, Independência, Transparência, Efetividade e Inovação";

    //Div texto visao
    divTextVisao.appendChild(tituloVisao);
    divTextVisao.appendChild(textoVisao);

    sectionVisao.appendChild(divImgVisao);
    sectionVisao.appendChild(divTextVisao);

    //Criando elementos da sectionMissao
    const sectionMissao = document.getElementById("missao");
    const divTextMissao = document.createElement("div");
    const tituloMissao = document.createElement("h1");
    const textoMissao1 = document.createElement("p");
    const textoMissao2 = document.createElement("p");
    const divImgMissao = document.createElement("div");
    const imagemMissao = document.createElement("img");

    tituloMissao.textContent = "Missão";
    textoMissao1.textContent = "Atuar no setor da educação de idiomas, com ética eficiência e cultura.";
    textoMissao2.textContent = "Impulsionar a vida da comunidade, a aprender uma nova lingua e descobrir novos mundos!";
    
    imagemMissao.src = "../image/bandeira.png";
    imagemMissao.alt = "Icone de bandeira";

    //Div texto missao
    divTextMissao.appendChild(tituloMissao)
    divTextMissao.appendChild(textoMissao1)
    divTextMissao.appendChild(textoMissao2)

    //Div imagem missao
    divImgMissao.appendChild(imagemMissao);

    sectionMissao.appendChild(divImgMissao);
    sectionMissao.appendChild(divTextMissao);
}