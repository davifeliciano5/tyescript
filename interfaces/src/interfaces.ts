
interface ILojaGringo{
    nome:string
    cidade:string
}

const loja: ILojaGringo = {
    nome:"Queji",
    cidade:"MG"
}

    function NovaLoja({nome, cidade}:ILojaGringo){
        console.log(`Seu nome? ${nome} Sua cidade: ${cidade}`);
    }
    NovaLoja({nome:"Davi",cidade:"Brasília"})