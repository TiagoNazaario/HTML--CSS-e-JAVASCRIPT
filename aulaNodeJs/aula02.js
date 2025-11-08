/*
var idade = 67
console.log(`Voçê tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto Obrigatório')
}
==========================================================================================================================================
var agora = new Date()
var hora = agora.getHours()
if (hora == 12) {
    console.log(`Agora são Meio Dia`)
} else if (hora < 12) {
    console.log(`Agora são ${hora} horas da manhã.`)
} else if (hora < 18) {
    console.log(`Agora são ${hora-12} horas da tarde`)
} else {
    console.log(`Agora são ${hora-12} horas da noite`)
}
==========================================================================================================================================
//Condição Multipla
//Breaks são obrgatórios
var diasem = new Date().getDay()
switch(diasem) {
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda-Feira')
        break
    case 2:
        console.log('Hoje é Terça-Feira')
        break
    case 3:
        console.log('Hoje é Quarta-Feira')
        break
    case 4:
        console.log('Hoje é Quinta-Feira')
        break
    case 5:
        console.log('Hoje é Sexta-Feira')
        break
    case 6:
        console.log('Hoje é Sábado')
        break
    default:
        console.log('ERRO!! dia invalido')
        break
}
==========================================================================================================================================
var n1 = 2000.7
n1 = 2000.7
n1.toFixed(2) = 2000.70
n1.toFixed(2).replace('.' , ',') = 2000,70 
n1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) = 'R$ 2,000.70'
n1.toLocaleString('pt-br', {style: 'currency', currency: 'USD'}) = 'US$ 2,000.70'
n1.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'}) = '€ 2,000.70'
==========================================================================================================================================
var vel = 69
console.log(`A velocidade do seu carro é ${vel}Km/h`)
if (vel > 60) {
    console.log(`voce ultrapassou a velocidade maxima. !MULTADO!`)
}
console.log(`Dijira com cuidado`)
##---------------------------------------
var pais = 'brasil'
if (pais == 'brasil') {
    console.log(`você é brasileiro`)
} else {
    console.log(`você é estrangeiro`)
}
==========================================================================================================================================
var total = 1000

while (total > 0) {
    console.log(`Passo ${total}`)
    total--
}
var total = 10
do {
    console.log(`Passo ${total}`)
    total--
} while (total > 0)
console.log('Vai começar...')
for (var cont = 1; cont <= 10; cont++){
    console.log(`passo ${cont}`)
}
console.log('Fim')

var inicio = 2
var fim = 10
var passo = 2
while (inicio <= fim) {
        console.log(`opa ${inicio}`)
        inicio += passo
    }
//==========================================================================================================================================================================
/*
var num = [5, 8, 9, 2, 9, 12, 6, 3, 5, 6, 1]
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos+1} tem o valor ${num[pos]}.`)
}
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}
console.log(num.indexOf(12))
console.log(num.indexOf(13))
*/
//======================================================================================================================================================
/*
function ParImpar(n) {
    if (n%2 == 0 ) {
        return 'PAR'
    } else {
        return 'Ímpar'
    }
}
console.log(ParImpar(43))
-------------
function Soma(n1=0, n2=0) {
    let s =  n1 + n2
    return s
}

console.log(Soma(5))

let v = function(x) {
    return x*2
} 
console.log(v(44))
-------------------------------
function Fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(Fatorial(6))

function Fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * Fatorial(n-1)
    }
}
console.log(Fatorial(6))
//==================================================================================================================================================================
let amigo = {nome: 'José', sexo: 'M', peso: 85.4, 
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }}

amigo.engordar(10.0)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
*/