//------------------Decorator para Classes

type Construtor = {new(...args: any[]):{}}

function logarClasse(constructor: Function){
    console.log(constructor)
}

function decoratorVazio(_:Function){}

function logarClasseSe(valor: boolean){
    return valor ? logarClasse : decoratorVazio
}

//Fábrica
function decorator(obj:{a : string, b: number}){
    //Decorator
    return function(_: Function):void{
        console.log(obj.a + '' + obj.b)
    }
}


function logarObjeto(construtor: Construtor){
    console.log('Carregando...')
    return class extends construtor{
        constructor(...args: any[]){
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}


//new Eletrodomestico()
//new Eletrodomestico()
//new Eletrodomestico()

interface Eletrodomestico {
    imprimir?():void
}

//@logarClasse//DECORA A CLASSE LOGAR COM A CLASSE ELETRODOMESTICO
//@logarClasseSe(false)
//@decorator({a: 'Teste', b:123})
//@logarObjeto

class Eletrodomestico{
    constructor(){
        console.log('novo...')
    }
}

function imprimivel(construtor: Function){
    construtor.prototype.imprimir = function(){
        console.log(this)
    }
}

const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()

//----------------------------------------------------------

// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}
 
@perfilAdmin//DECORATOR DE METODOS E FUNÇÕES
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(construtor: T){
    return class extends construtor{
        constructor(...args: any[]){
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin){
                throw new Error('Sem permissão!')
            }
        }
    }
}

//-------------------------Decorator para Metodos
class ContaCorrente {
    @naoNegativo//DECORATOR DE ATRIBUTO
    private saldo: number

    constructor(saldo: number){
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number){
        if(valor <= this.saldo){
            this.saldo -= valor
            return true
        }else{
            return false
        }
    }

    @congelar
    getSaldo(){
        return this.saldo
    }
}

const cc = new ContaCorrente(4000)
cc.sacar(1000)
console.log(cc.getSaldo())

//Object.freeze()
//IMPEDINDO QUE UMA FUNÇÃO OU METODO SEJA ALTERADA A PARTIR DE UM DECORATOR
function congelar(alvo: any, nomeMetodo: string, descritor: PropertyDescriptor){
    console.log(alvo)
    console.log(nomeMetodo)
    descritor.writable = false
}

//----------------------Decorator Em Atributos
function naoNegativo(alvo: any, nomePropriedade: string){
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade,{
        get: function(): any{
            return alvo["_" + nomePropriedade]
        },
        set: function(valor: any): void{
            if(valor < 0){
                throw new Error('Saldo Inválido')
            }else{
                alvo["_" + nomePropriedade]
            }
        }
    })
}

//---------------------------Decorator de um parametro de metodo
function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number){
    console.log(`Alvo: ${alvo}`)
    console.log(`Método: ${nomeMetodo}`)
    console.log(`índice Param: ${indiceParam}`)
}