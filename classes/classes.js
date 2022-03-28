"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; // posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);
//-----------------------------FORMA ENXUGADA--------------------------------
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta; // posso omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
//-----------------------------------------------------------
//DESAFIO 1
// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs.: Criar dois produtos: passando dois e três params
class Produtos {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco - (this.preco * (this.desconto * 100) / 100);
    }
    resumo() {
        return `${this.nome} custa R$${this.preco} com (${this.desconto * 100}% off  ->R$${this.precoComDesconto()})`;
    }
}
const prod1 = new Produtos('Leite', 5);
console.log(prod1.resumo());
const prod2 = new Produtos('Café', 15.98, 0.15);
console.log(prod2.resumo());
//------------------------------------------------------------------
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    //Private(Permite que metodos seja transferido por herança), public e protected
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'ka', 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar);
Array(50).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear);
//-------------------------------------------------------
//Herança
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        //CHAMANDO CONSTRUTOR DO PAI
        super('Ferrari', modelo, velocidadeMaxima); //COLOCAMOS A MARCA DENTRO DA CLASSE
        //..Podemos usar códigos
    }
    //Podemos sobrescrever
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-20);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
//-------------------------------------------------
//Getters e Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
//--------------------------------------------------------------
//Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(4));
//----------------------------------------------------------
//Classe Abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Somar extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicar extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Somar();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicar();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
//---------------------------------------------------------
//Padrão de projeto singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().agora());
//Somente Leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
console.log(turboHelice);
//# sourceMappingURL=classes.js.map