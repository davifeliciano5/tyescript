interface ICarro {
    modelo:string,
    ano?: number
}

const logan: ICarro = {
    modelo : "Renout",
    ano: 2008
}

function MostraCarro(propriedades:ICarro){
    console.log(`Modelo: ${propriedades.modelo}`);
    console.log(`Ano: ${propriedades.ano}`);
}

MostraCarro({modelo:"Astra",ano:2004})