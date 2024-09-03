window.addEventListener("load", mainLoad);

function mainLoad(){
    const form = document.querySelector("form");
    form.addEventListener("submit", realizaLogin);
}

async function realizaLogin(evento){
    evento.preventDefault();

    const email = document.getElementById("usuario");
    const senha = document.getElementById("senha");

    const reqBody = { usuario: nome.value,
        senha: senha.value 
    };

    const resposta = await fetch("http://localhost:3000/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody)
    });

    if(resposta.status == "200"){
        //Salva token gerado no localStorage
        const respostaParseada = await resposta.json();
        //token: "hahaha"
        console.log(respostaParseada.token);
        localStorage.setItem("token", respostaParseada.token);

        //redireciona para o dashboard
        window.location.href = "/dashboard.html";
    }else{
        const p = document.getElementById("message-erro");
        p.textContent = "Usuário/Senha incorreta";
    }
}
