"use strict";
//ANY -> TIPO FLEXIVEL (QUALQUER ELEMENTO NÃO ATRIBUIDO UM TIPO, É TRATADO COMO ANY)
//string
let nome = 'João';
console.log(nome);
// nome = 28
//numbers
let idade = 27;
//idade = 'Ana'
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
//tipos explicítos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
//minhaIdade = '27'
//array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
//hobbies = 100
console.log(hobbies);
//tuplas
let endereco = ["Nair Benigno", 34, "Casa Grande 2"];
console.log(endereco);
endereco = ["Rua importante", 66, "Bloco F"];
console.log(endereco);
//enums (valores pré-definido ex: seg, ter, quart, quint, sex etc...)
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//-----------------------------
//funções
function retornaMeuNome() {
    //return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    //return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
//console.log(multiplicar(2, 'BIA'))
console.log(multiplicar(4.7, 9));
//tipo função
let calculo;
//calculo = digaOi
//calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
//-----------------------------
//objetos
let usuario = {
    nome: 'Danilo',
    idade: 27
};
console.log(usuario);
//usuario = {}
/*usuario = {
    name:'Maria',
    age:31
}*/
usuario = {
    idade: 46,
    nome: 'Vera'
};
console.log(usuario);
//-------------------------------
// Desafio 1
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos surpevisores
        - Função de bater ponto que recebe a hora (número)
            e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/
let funcionario = {
    nome: 'Danilo',
    pt: 7
};
console.log(funcionario.pt > 8 ? "Fora do horário" : "Ponto normal");
let funcionarios = ["Danilo", 9];
console.log(funcionarios[1] > 8 ? "Fora do horário" : "Ponto normal");
let funcionarios2 = {
    nome: 'Danilo',
    pt: 9
};
console.log(funcionarios2.pt > 8 ? "Fora do horário" : "Ponto normal");
//------------------------------------------
//Union Type (MAIS DE UM TIPO DE UMA VARIÁVEL)
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
//nota = true
//-----------------------------
//Checando tipos
let valor = 30;
//-----------------------------
//Never (ERRO OU ALGUM TIPO DE LOOPING)
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "Sabão",
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco inválido');
        }
    }
};
produto.validarProduto();
//-----------------------------
let altura = 12;
//altura = null
let alteraOpcional = 12;
alteraOpcional = null;
const contato1 = {
    nome: 'Danilo',
    tel1: '956634571',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let user = {
    saldo: 1000,
    nome: 'Danilo',
    contatos: '11956634751'
};
function depositar2(value) {
    //return minhaIdade
    return value += 1500;
}
console.log(depositar2(user.saldo));
let contaBancaria3 = {
    saldo: 3456,
    depositar3(valor) {
        this.saldo += valor;
    }
};
let correntista3 = {
    nome: 'Danilo',
    contaBancaria3: contaBancaria3,
    contatos: ['11956634751']
};
correntista3.contaBancaria3.depositar3(3000);
console.log(correntista3);
//# sourceMappingURL=tipos.js.map