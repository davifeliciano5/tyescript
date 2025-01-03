interface TecnologiaProps {
    nome:string,
    ano:number,
}

interface NomeProps {
    tecnologia: TecnologiaProps[],
}

let frontEnd: NomeProps = {
    tecnologia:[
        {nome:"React",ano:2020},
        {nome:"Javascript",ano:2000}
    ]
}

console.log(frontEnd);
console.log("$$$$$$$$$$$$$$");
console.log(frontEnd.tecnologia[0]);
console.log("$$$$$$$$$$$$$$");
console.log(frontEnd.tecnologia[1].nome);