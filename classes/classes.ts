class Data {
    //Público por padrão
    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data// posso omitir os "()"
casamento.ano = 2017
console.log(casamento)

//-----------------------------FORMA ENXUGADA--------------------------------

class DataEsperta {
    constructor(
        public dia: number = 1,
        public mes: number = 1,
        public ano: number = 1970
    ) {
    }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta// posso omitir os "()"
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

//-----------------------------------------------------------

//DESAFIO 1
// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs.: Criar dois produtos: passando dois e três params

class Produtos {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0
    ) { }

    public precoComDesconto(): number {
        return this.preco - (this.preco * (this.desconto * 100) / 100)
    }

    public resumo(): string {
        return `${this.nome} custa R$${this.preco} com (${this.desconto * 100}% off  ->R$${this.precoComDesconto()})`
    }
}

const prod1 = new Produtos('Leite', 5)
console.log(prod1.resumo())

const prod2 = new Produtos('Café', 15.98, 0.15)
console.log(prod2.resumo())

//------------------------------------------------------------------

class Carro {
    private velocidadeAtual: number = 0

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 200
    ) { }
    //Private(Permite que metodos seja transferido por herança), public e protected
    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }
    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'ka', 185)

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar)

Array(50).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear)

//-------------------------------------------------------

//Herança
class Ferrari extends Carro {

    constructor(modelo: string, velocidadeMaxima: number) {
        //CHAMANDO CONSTRUTOR DO PAI
        super('Ferrari', modelo, velocidadeMaxima)//COLOCAMOS A MARCA DENTRO DA CLASSE
        //..Podemos usar códigos
    }

    //Podemos sobrescrever
    public acelerar(): number {
        return this.alterarVelocidade(20)
    }
    public frear(): number {
        return this.alterarVelocidade(-20)
    }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

//-------------------------------------------------

//Getters e Setters
class Pessoa {
    private _idade: number = 0
    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1.idade)

//--------------------------------------------------------------

//Atributos e métodos estáticos
class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return Matematica.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4))

//----------------------------------------------------------

//Classe Abstrata
abstract class Calculo {
    //protected implica que o método ou propriedade é acessível apenas internamente dentro da classe ou qualquer classe que o estenda, mas não externamente.
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Somar extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicar extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1 = new Somar()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicar()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())


//---------------------------------------------------------
//Padrão de projeto singleton
class Unico {
    private static instance: Unico = new Unico
    private constructor(){}

    static getInstance(): Unico{
        return Unico.instance
    }

    agora(){
        return new Date
    }
}

console.log(Unico.getInstance().agora())

//Somente Leitura
class Aviao {
    public readonly modelo: string
    constructor(modelo: string, public readonly prefixo: string){
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114','PT-ABC')
console.log(turboHelice)