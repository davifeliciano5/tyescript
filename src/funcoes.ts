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