"use strict";
const loja = {
    nome: "Queji",
    cidade: "MG"
};
function NovaLoja({ nome, cidade }) {
    console.log(`Seu nome? ${nome} Sua cidade: ${cidade}`);
}
NovaLoja({ nome: "Davi", cidade: "Brasília" });
