"use strict";
const logan = {
    modelo: "Renout",
    ano: 2008
};
function MostraCarro(propriedades) {
    console.log(`Modelo: ${propriedades.modelo}`);
    console.log(`Ano: ${propriedades.ano}`);
}
MostraCarro({ modelo: "Astra", ano: 2004 });
