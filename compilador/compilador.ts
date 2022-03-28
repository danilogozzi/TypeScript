let canal: string = 'Gaveta'
let inscritos: number = 610234

//canal = inscritos
console.log(`Canal = ${canal}`)

//let nome = 'Pedro', se tentarmos declarar de novo a variável nome, terá erro pois já está declarada no escopo global

function saudar(isManha: boolean): string{
    let saudacao: string
    if(isManha){
        saudacao = 'Bom dia!'
    }else{
        saudacao = 'Tena uma boa vida!'
    }
    return saudacao
}