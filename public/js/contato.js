window.addEventListener("load", main);

function main(){
    const sectionContato = document.getElementById("contato");

    const divTexto = document.createElement("div");
    const divForm = document.createElement("div");
    const titulo = document.createElement("h1");
    const subtitulo = document.createElement("h2");
    const texto = document.createElement("p");

    divTexto.className = "contatoText";
    divForm.className = "contatoForm";
    titulo.textContent = "Central de Relacionamento";
    subtitulo.textContent = "Caso tenha alguma dúvida, reclamação, sugestão ou um elogio, por favor, entre em contato conosco!";
    texto.textContent = "Nossos profissionais atendem de segunda a sexta, das 8h às 19h. Se preferir, fale diretamente com a Central de Relacionamento da Yes pelo WhatsApp (87) 90000-0000 ou preencha o formulário ao lado.";

    const formulario = document.createElement("form");

    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Seu e-mail";
    labelEmail.htmlFor = "email";
    const email = document.createElement("input");
    email.type = "email";
    email.name = "email";
    email.id = "email";
    email.placeholder = "mail@mail.com"
    email.required = true;

    const labelNome = document.createElement("label");
    labelNome.textContent = "Seu nome";
    labelNome.htmlFor = "nome";
    const nome = document.createElement("input");
    nome.type = "text";
    nome.name = "nome";
    nome.id = "nome";
    nome.placeholder = "Fulano da Silva"
    nome.required = true;

    const labelTel = document.createElement("label");
    labelTel.textContent = "Seu telefone";
    labelTel.htmlFor = "telefone";
    const telefone = document.createElement("input");
    telefone.type = "tel";
    telefone.name = "telefone";
    telefone.id = "telefone";
    telefone.placeholder = "(87) 99999-9999"
    telefone.required = true;

    const labelMsg = document.createElement("label");
    labelMsg.textContent = "Deixe sua mensagem";
    labelMsg.htmlFor = "mensagem";
    const mensagem = document.createElement("textarea");
    mensagem.name = "mensagem";
    mensagem.id = "mensagem";
    mensagem.rows = 5;
    mensagem.cols = 30;
    mensagem.placeholder = "Deixe aqui sua mensagem..."
    mensagem.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Enviar';

    formulario.appendChild(labelEmail);
    formulario.appendChild(email);
    formulario.appendChild(labelNome);
    formulario.appendChild(nome);
    formulario.appendChild(labelTel);
    formulario.appendChild(telefone);
    formulario.appendChild(labelMsg);
    formulario.appendChild(mensagem);
    formulario.appendChild(submitButton);

    formulario.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(formulario);
        const data = Object.fromEntries(formData.entries());

        console.log("Dados do Formulário:", data);

        try {
            const response = await fetch('/api/contato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log(result);
            if (response.ok) {
                alert("Mensagem enviada com sucesso!");
                formulario.reset();
            } else {
                alert("Erro ao enviar mensagem: " + result.message);
            }
        } catch (error) {
            console.error('Erro:', error);
            alert("Erro ao enviar mensagem. Tente novamente.");
        }
    });

    divTexto.appendChild(titulo);
    divTexto.appendChild(subtitulo);
    divTexto.appendChild(texto);

    divForm.appendChild(formulario);

    sectionContato.appendChild(divTexto);
    sectionContato.appendChild(divForm);
}
