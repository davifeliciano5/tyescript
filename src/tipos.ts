let tecnologia:string;

tecnologia = "tecnologia";

console.log(tecnologia);

let valor:number;//int, float, hex, binary
valor = 20;
console.log(valor);

//union-type

let userId:number | string;

userId = '123';

//any

let qualquer:any;
qualquer =3123213;
console.log(qualquer)
qualquer="davbi";
console.log(qualquer)

//boolean

let auth:boolean = true;

//array
let numeros:number[];
let letras:(number|string)[];
let filmes:Array<string>;
let carros:Array<string | number>;

// tupla | contrato 

let aluno :[string,number];
aluno = ['Davi',10];
aluno.push('Pedrin',19);
console.log(aluno);

//objets

let Usuario:object = {
    nome:"Davi",
    email:"Feelicianoo@gmail.com",
}
console.log(Usuario);

//enum enumerar

enum DesignColors {
    white= "#FFFFFF",
    black = "#000000"
}
console.log(DesignColors.white);

enum Statrus {
    ADMIN,//0
    USER,//1
}
console.log(Statrus.ADMIN);

//null undefind

let panda: null; //tem como mudar
let panda1: undefined; //não tem como mudar

//unknow Quando não sabe o tipo que vai receber, sendo menos flexivel que any
//só pode atribuir a variável do tipo unknow a unknow ou any
let total: unknown; 

//Afirmando um tipo

let StatusAtual:unknown = 1;
let mudaStatus: number= 0;

mudaStatus = StatusAtual as number;
mudaStatus = <number>StatusAtual;