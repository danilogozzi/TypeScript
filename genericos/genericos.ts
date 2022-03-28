function echo(objeto: any){
    return objeto
}

console.log(echo('joão').length)
console.log(echo(27).length)
console.log(echo({nome: 'João', idade: 27}))

//Usando Generics
function echoMelhorado<TIPO>(objeto: TIPO):TIPO{
    return objeto
}

console.log(echoMelhorado('joão').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({nome: 'João', idade: 27}).nome)

//Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
console.log(avaliacoes)

//Array
function imprimir<T>(args: T[]){
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Ana', 'Bia', 'Carlos'])
imprimir<{nome: string, idade:number}>([
    {nome: 'Fulano', idade:22},
    {nome:'Cilano', idade: 23},
    {nome:'Beltrano', idade:24}
])

//PODEMOS CRIAR UM TIPO E USAR O TIPO COMO GENERICS
type Aluno = {nome: string, idade: number}

imprimir<Aluno>([
    {nome:'Fulano', idade: 22},
    {nome:'Cicrano', idade: 23},
    {nome: 'Beltrano', idade: 24}
])

//Tipo usando Genéricos
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

//Class com Generics
abstract class OperacaoBinaria<T, R>{
    constructor(public operando1: T, public operando2: T){}

    abstract executar():R
}


class SomaBinaria extends OperacaoBinaria<number, number>{
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3, 4).executar())


class DiferencaEntreDatas extends OperacaoBinaria<Data, string>{
    getTime(data: Data):number{
        let {dia, mes, ano} = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(5, 5, 2022)
console.log(new DiferencaEntreDatas(d1, d2).executar())

//Desafio Classe Fila
//Atributo: fila(Array)
//Metodos: entrar, proximo, imprimir
class Fila<T extends number | string>{// extends coloca exceções
    private fila:Array<T>

    constructor(...args: T[]){
        this.fila = args
    }

    entrar(elemento: T){
        this.fila.push(elemento)
    }

    proximo(): T | null{
        if(this.fila.length >= 0 && this.fila[0]){
            const primeiro = this.fila[0]
            this.fila.splice(0, 1)
            return primeiro
        }else{
            return null
        }
    }

    imprimir(){
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Ana', 'Lu')
fila.imprimir()
fila.entrar('Danilo')
fila.imprimir()

const novaFila = new Fila<number>(1, 2, 3)
novaFila.imprimir()


