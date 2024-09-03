import { dbPromise } from "./db.js";

const modalidades = [
    {
        img: "https://images.pexels.com/photos/6684506/pexels-photo-6684506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        titulo: "Inglês para adultos",
        descricao: "Sabemos que aprender inglês pode ser desafiador, mas com a YES Idiomas você estará preparado para atingir esse objetivo de forma rápida e natural. Destaque-se no mercado de trabalho ou explore o mundo com fluência no idioma!"
    },
    {
        img: "https://images.pexels.com/photos/8419233/pexels-photo-8419233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        titulo: "Inglês para adolescentes",
        descricao: "Com a metodologia da YES Idiomas, seu filho aprende inglês de forma eficiente e descontraída, com jogos e atividades em grupo que possibilitam a conversação e o aprendizado do idioma de um jeito enriquecedor!"
    },
    {
        img: "https://images.pexels.com/photos/1720188/pexels-photo-1720188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        titulo: "Inglês para crianças",
        descricao: "Na infância são criadas importantes bases para o processo de aprendizagem ao longo de toda a vida. Por isso, a YES Idiomas se preocupa com o desenvolvimento das habilidades cognitivas do seu filho durante o aprendizado de um novo idioma. Nossas aulas sempre buscam estimular as crianças para que sintam vontade de aprender."
    }
];


async function adicionarModalidadesAoBd(){
    const db = await dbPromise;

    for(let x = 0; x < modalidades.length; x++){
        await db.run(`INSERT INTO cursos (id, img, titulo, descricao) VALUES (?,?,?,?)`, [
            modalidades[x].id,
            modalidades[x].img,
            modalidades[x].titulo,
            modalidades[x].descricao
        ])
    }
}

const duvidas = [
    {
        question: "Quais cursos de idiomas são oferecidos na YES?",
        response: "Na YES, oferecemos apenas o curso de inglês. O curso é projetado para atender diferentes níveis de habilidade e necessidades de aprendizado."
    },
    {
        question: "A YES oferece certificados ao final dos cursos?",
        response: "Sim, ao concluir o curso na YES, os alunos recebem um certificado."
    },
    {
        question: "Como posso me matricular em um curso na YES?",
        response: "Você pode se matricular visitando a escola YES mais próxima. Agende uma visita preenchendo o formulário no site que nossa equipe está pronta para ajudá-lo a escolher o melhor curso e esclarecer qualquer dúvida."
    },
    {
        question: "Quanto tempo de duração dos cursos na YES?",
        response: "A duração dos cursos varia de acordo com o nível escolhido. Geralmente, nosso curso é estruturado para oferecer uma progressão contínua e eficaz no aprendizado do idioma."
    }
];

async function adicionarDuvidas(){
    const db = await dbPromise;

    for(let x = 0; x < duvidas.length; x++){
        await db.run(`INSERT INTO duvidas (id, question, response) VALUES (?,?,?)`, [
            duvidas[x].id,
            duvidas[x].question,
            duvidas[x].response
        ])
    }
}

adicionarDuvidas().then(() => console.log("Dados de duvidas inseridos no BD"));

adicionarModalidadesAoBd().then(() => console.log("Dados de modalidades inseridos no BD"));