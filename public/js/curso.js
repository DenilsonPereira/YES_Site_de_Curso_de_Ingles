window.addEventListener('load', main);

let cursos;

async function main(){
    const dados = await fetch("http://127.0.0.1:3000/api/cursos");
    const dadosPuros = await dados.json();

    cursos = dadosPuros;

    const sectionCursos = document.getElementById("curso1");

    for(let x = 0; x < cursos.length; x++){
        //Criar elementos do curso
        const sectionCurso = document.createElement("section");
        const divText = document.createElement("div");
        const divImg = document.createElement("div");
        const imgCurso = document.createElement("img");
        const h1Curso = document.createElement("h1");
        const pCurso = document.createElement("p");
        const buttonCurso = document.createElement("a");
        
        sectionCurso.id = cursos[x].id;

        imgCurso.src = cursos[x].img;
        imgCurso.width = "100";
        imgCurso.height = "150";

        h1Curso.textContent = cursos[x].titulo;
        pCurso.textContent = cursos[x].descricao;

        buttonCurso.textContent = "Saiba Mais";
        //Ação do botão
        buttonCurso.href = "http://localhost:3000/contato.html";
        buttonCurso.className = "btnCursos";

        //Adicionar os elementos na tela para renderização

        divImg.appendChild(imgCurso);
        divText.appendChild(h1Curso);
        divText.appendChild(pCurso);
        divText.appendChild(buttonCurso);

        //Configuração de valores e propriedades dos elementos
        if(cursos[x].id%2 != 0){
            sectionCurso.className = "adultos";
            divText.className = "adultosContent";
            sectionCurso.appendChild(divText);
            sectionCurso.appendChild(divImg);
        }else{
            sectionCurso.className = "jovens";
            divText.className = "jovensContent";
            sectionCurso.appendChild(divImg);
            sectionCurso.appendChild(divText);
        
        }

        sectionCursos.appendChild(sectionCurso);
    }
}