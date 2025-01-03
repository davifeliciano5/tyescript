interface Curso {
    nome:string;
    ano:number;
    preco:number;
    promocao:(preco:number)=> void;
}

function MostraPromocao(preco: number): void {
    console.log(`Compre agora por apenas ${preco}`);
}

const Java: Curso = {
    nome: "Curso de java",
    ano: 2025,
    preco: 2000,
    promocao: MostraPromocao
}
console.log(Java.promocao(200));

console.log("##############################")



interface SomaProps {
    (valor: number,valor1:number): number;
}

let valores: SomaProps = (valor:number,valor2:number):number => {
    return valor + valor2;
}

const resultado = valores(1,1);
console.log(resultado);