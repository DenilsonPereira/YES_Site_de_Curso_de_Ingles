window.addEventListener('load', main);

async function main() {
    const dados = await fetch("http://127.0.0.1:3000/api/contato");
    const dadosPuros = await dados.json();

    const tbody = document.getElementById("mensagens");

    for (let x = 0; x < dadosPuros.length; x++) {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.textContent = dadosPuros[x].id;

        const tdEmail = document.createElement("td");
        tdEmail.textContent = dadosPuros[x].email;

        const tdNome = document.createElement("td");
        tdNome.textContent = dadosPuros[x].nome;

        const tdTelefone = document.createElement("td");
        tdTelefone.textContent = dadosPuros[x].telefone;

        const tdTexto = document.createElement("td");
        tdTexto.textContent = dadosPuros[x].mensagem;

        tr.appendChild(tdId);
        tr.appendChild(tdEmail);
        tr.appendChild(tdNome);
        tr.appendChild(tdTelefone);
        tr.appendChild(tdTexto);

        tbody.appendChild(tr);
    }
}

function sair() {
    localStorage.clear();
    window.location.href = "../index.html";
}

