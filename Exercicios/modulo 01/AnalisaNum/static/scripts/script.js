let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#selLista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        window.alert('por favor digite um número')
    }
    num.value = ``
    num.focus()
    res.innerHTML = ``
}

function Resultado() {
    if (valores.length == 0) {
        window.alert('!ERRO! adicione valores para continuar')
    } else {
        let total = valores.length
        let soma = 0
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        res.innerHTML = `Ao todo foram registrados ${total} números,`
        for (let num of valores) {
            soma += num
        }
        let media = soma / total
        res.innerHTML += `<p>a soma dos valores é ${soma},</p>`
        res.innerHTML += `<p>o maior valor digitado foi ${maior},</p>`
        res.innerHTML += `<p>o menor valor digitado foi ${menor},</p>`
        res.innerHTML += `<p>e média dos valores é ${media}.</p>`
    }
}

