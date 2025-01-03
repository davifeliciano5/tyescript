interface Escola {
    nome: string;
   readonly cnpj: number;
}

let Elite: Escola = {
    nome:"Colégio elite",
    cnpj:312312321321,
} 
//Elite.id = 10; readonly bloqueia


console.log(Elite);