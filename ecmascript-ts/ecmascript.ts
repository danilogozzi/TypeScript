//let & const
let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true
if(estaFrio){
    let acao = 'Colocar o casavo!'
    console.log(acao)
}

const cpf: string = '402.466.928-12'
//cpf = '789.101.132-78'
console.log(cpf)

//--------------------------------------

//Arrow function
function somar (n1:number, n2:number):number{
    return n1 + n2
}
console.log(somar(2,3))

const subtrair = (n1:number, n2:number) => n1 - n2
/*const subtrair = (n1:number, n2:number): number =>{
    return n1 - n2
}*/
console.log(subtrair(2,3))

//-----------------------------------------

const saudacao = () => console.log('Olá')
saudacao()

const falarCom = (pessoa: string) => console.log('Ola ' + pessoa)
falarCom('Danilo')

//this

/*function normalComThis(){
    console.log(this)
}

normalComThis()*/

//---------------------------------------------

//Parâmetros padrão
function contagemRegressiva(inicio: number = 5, fim: number = inicio -5): void{
    console.log(inicio)
    while(inicio > fim){
        inicio--
        console.log(inicio)
    }
    console.log('Fim!')
}   

contagemRegressiva()
contagemRegressiva(3)

//---------------------------------------------

//spread & rest
const numbers = [1, 10, 99, -5, 200, 1034]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA]
console.log(turmaB)

function retornarArray(...args: number[]): number[]{
    return args
}

const numeros = retornarArray(1,2,3,4,5,6,345,623)
console.log(numeros)
console.log(retornarArray(...numbers))

//Rest & Spread (tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a:number, b:string, c:boolean): void{
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string ,boolean]) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

//--------------------------------------------------------

//Destructuring (PEGA VALORES DE UM ARRAY)
const caracteristicas = ['Motor Zetec 1.8', 2020]

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

//Destructuring Objeto
const item = {
    nome:'SSD 480GB',
    preco: 200,
    caracteristicas:{
        w:'Importante'
    }
}

const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem)
console.log(precoItem)

const {nome: n, preco: p, caracteristicas: {w}} = item
console.log(n)
console.log(p)
console.log(w)

//------------------------------------------------------
//DESAFIOS
// Exercicio 1
/*var dobro = function(valor) {
    return valor * 2
}
console.log(dobro(10))*/

/*let dobro = function (valor:number):number{
    return valor * 2
}*/
const dobro = (valor:number):number => valor *2
console.log(`O dobro: ${dobro(5)}`)


// Exercicio 2
/*var dizerOla = function (nome) {
    if (nome === undefined) { nome = 'Pessoa' }
    console.log('Olá, ' + nome)
}
dizerOla()
dizerOla('Anna')*/

const dizerOla = (nome:string = 'Pessoa'):void => console.log(`Olá, ${nome}`)
dizerOla()
dizerOla('Danilo')

// Exercicio 3
/*var nums = [-3, 33, 38, 5]
// Imprimir o menor valor
console.log('???')*/
const nums:number[] = [10, 33, 8, 38, 20]
console.log(Math.min(...nums))

// Exercicio 4
const array:number[] = [55, 20, 5, ...nums]
// Adicionar todos os elementos de "nums" em array
console.log(array)
console.log(Math.min(...array))

// Exercicio 5
/*var notas = [8.5, 6.3, 9.4]
var nota1 = notas[0]
var nota2 = notas[1]
var nota3 = notas[2]
console.log(nota1, nota2, nota3)*/
const notas: number[] = [8.5, 6.3, 9.4]
//DESTRUCTURING
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

// Exercicio 6
/*var cientista = { primeiroNome: 'Will', expeciencia: 12 }
var primeiroNome = cientista.primeiroNome
var expeciencia = cientista.expeciencia
console.log(primeiroNome, expeciencia)*/

const cientista:{primeiroNome:string, experiencia:number} = {
    primeiroNome:'Danilo',
    experiencia:3
} 
console.log(`Nome: ${cientista.primeiroNome} Experiência: ${cientista.experiencia}`)

//--------------------------------------------------------------

//Promise

/*function esperar3sPromise(){
    return new Promise((resolve: any)=>{
        setTimeout(()=>{
            resolve('3s depois promise...')
        },3000)
    })
}

esperar3sPromise()
    .then(dado => console.log(dado))*/


fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(res => console.log(res))



