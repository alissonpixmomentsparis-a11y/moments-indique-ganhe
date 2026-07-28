alert("SCRIPT CARREGOU");

const meuWhatsApp = "5519987195282";

let linkAtual = "";


// ROLAR ATÉ O GERADOR

function rolarIndicacao(){

    document
    .getElementById("indicacao")
    .scrollIntoView({
        behavior:"smooth"
    });

}



// GERAR LINK DE COMPRA

function gerarLinkCompra(){

    const nome = document
    .getElementById("nomeIndicador")
    .value
    .trim();


    if(nome === ""){
        alert("Digite seu nome primeiro");
        return;
    }


    const mensagem =
    `Olá! O ${nome} me indicou e quero comprar um perfume Moments Paris.`;


    linkAtual =
    `https://wa.me/${meuWhatsApp}?text=${encodeURIComponent(mensagem)}`;


    document
    .getElementById("linkGerado")
    .value = linkAtual;


}






// GERAR LINK DE CONSULTOR

function gerarLinkConsultor(){

    const nome = document
    .getElementById("nomeIndicador")
    .value
    .trim();


    if(nome === ""){
        alert("Digite seu nome primeiro");
        return;
    }


    const mensagem =
    `Olá! O ${nome} me indicou e quero ser consultor Moments Paris.`;


    linkAtual =
    `https://wa.me/${meuWhatsApp}?text=${encodeURIComponent(mensagem)}`;


    document
    .getElementById("linkGerado")
    .value = linkAtual;


}






// COPIAR LINK

function copiarLink(){

    if(linkAtual === ""){
        alert("Gere seu link primeiro");
        return;
    }


    navigator.clipboard.writeText(linkAtual);


    alert("Link copiado com sucesso!");

}







// COMPARTILHAR NO WHATSAPP

function compartilharWhatsApp(){

    if(linkAtual === ""){
        alert("Gere seu link primeiro");
        return;
    }


    window.open(linkAtual, "_blank");

}
