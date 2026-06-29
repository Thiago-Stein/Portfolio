function exibirMensagemSucesso(event) {
    event.preventDefault(); 

    const form = document.querySelector("form");

    const mensagemAntiga = document.getElementById("mensagemSucesso");

    if (mensagemAntiga) {
        mensagemAntiga.remove();
    }

    const mensagemSucesso = document.createElement("p");
    mensagemSucesso.id = "mensagemSucesso";
    mensagemSucesso.innerText = "Email enviado com sucesso! Entrarei em contato em breve.";

    mensagemSucesso.style.color = "#9dff00";
    mensagemSucesso.style.fontWeight = "bold";
    mensagemSucesso.style.marginTop = "15px";
    
    form.appendChild(mensagemSucesso);
}


const botaoEnviar = document.getElementById("enviarEmail");

botaoEnviar.addEventListener("click", exibirMensagemSucesso);