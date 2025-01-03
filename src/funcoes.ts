    function login(nome:string):boolean | string {
        console.log(nome)
        return true
    }

    const retorno = login("Davi");
    console.log(retorno);


    // function Api(api:string):string {
    //     return "API: https://hihihi.com"
    // }

    const arrown = (api:string):string =>{
        return "API: https://hihihi.com" + api;
    } 
    arrown("hihiih");

    //Valores padrão ou opcional

    function cadastro(nome:string,sobrenome:string,telefone?:number,endereco = "Brasil"):void{
        console.log(nome,sobrenome,telefone,endereco);
    }

    //rest

    function Vendas(...produtos:number[]){
        console.log(`Hoje voçê fez ${produtos.length} vendas`);
    }
    Vendas(10,32,4,3,1,22,33,44,51,3123);