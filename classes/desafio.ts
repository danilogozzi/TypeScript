// Exercício 1 - Classe
/*function Moto(nome) {
    this.nome = nome
    this.velocidade = 0

    this.buzinar = function () {
        console.log('Toooooooooot!')
    }

    this.acelerar = function (delta) {
        this.velocidade = this.velocidade + delta
    }
}

var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)*/

class Motos {
    public velocidade: number = 0
    constructor(
        public nome: string
    ) {}

    public buzinar(){   
        return console.log('Tooooooooooot!')
    }
    public acelerar(delta: number = 0): number{
        return this.velocidade = delta +=5
    }
}

const moto = new Motos('Harley')
console.log(moto.buzinar())
console.log(moto.acelerar(35))




// Exercício 2 - Herança
/*var objeto2D = {
    base: 0,
    altura: 0
}

var retangulo = Object.create(objeto2D)
retangulo.base = 5
retangulo.altura = 7
retangulo.area = function () {
    return this.base * this.altura
}
console.log(retangulo.area())*/

class objeto2D{
    constructor(
        public base: number = 0,
        public altura: number = 0
    ){}
}

class Retangulo extends objeto2D{
    constructor(base: number, altura:number){
        super(base, altura)
    }
    public area() :number{
        return this.base * this.altura
    }
}

const calcRetangulo = new Retangulo(3, 10)
console.log(calcRetangulo.area())





// Exercício 3 - Getters & Setters
/*var estagiario = {
    _primeiroNome: ''
}

Object.defineProperty(estagiario, 'primeiroNome', {
    get: function () {
        return this._primeiroNome
    },
    set: function (valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    },
    enumerable: true,
    configurable: true
})

console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)*/

class Estagiario {
    private _primeiroNome: string =''

    get primeiroNome(){
        return this._primeiroNome
    }

    set primeiroNome(valor){
        if(valor.length >= 3){
            this._primeiroNome = valor
        }else{
            this._primeiroNome
        }
    }
}

const estagiario = new Estagiario
console.log(estagiario.primeiroNome)

estagiario.primeiroNome = 'Da'
console.log(estagiario.primeiroNome)

estagiario.primeiroNome = 'Danilo'
console.log(estagiario.primeiroNome)


