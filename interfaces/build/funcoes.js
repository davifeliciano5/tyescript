"use strict";
function MostraPromocao(preco) {
    console.log(`Compre agora por apenas ${preco}`);
}
const Java = {
    nome: "Curso de java",
    ano: 2025,
    preco: 2000,
    promocao: MostraPromocao
};
console.log(Java.promocao(200));
console.log("##############################");
let valores = (valor, valor2) => {
    return valor + valor2;
};
const resultado = valores(1, 1);
console.log(resultado);
