function gerarCliente() {

    let link = "https://alissonpixmomentsparis-a11y.github.io/moments-indique-ganhe/?tipo=cliente";

    document.getElementById("link").value = link;

}


function gerarConsultor() {

    let link = "https://alissonpixmomentsparis-a11y.github.io/moments-indique-ganhe/?tipo=consultor";

    document.getElementById("link").value = link;

}


function copiarLink() {

    let campo = document.getElementById("link");

    campo.select();

    navigator.clipboard.writeText(campo.value);

    alert("Link copiado com sucesso!");

}


function whatsapp() {

    let link = document.getElementById("link").value;

    let mensagem = "Olá! Conheça a Moments Paris através do meu link: " + link;

    let url = "https://wa.me/?text=" + encodeURIComponent(mensagem);

    window.open(url, "_blank");

}
