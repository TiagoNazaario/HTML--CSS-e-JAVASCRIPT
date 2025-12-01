function Tabuada() {
    var num = document.querySelector('input#txtn').value
    var tab = document.querySelector('select#seltab')
    if (Number(num.length) === 0) {
        window.alert('Por favor digite um número')
    } else {
        tab.innerHTML = ``
        let n = Number(num)
        let c = 1
        tab.size = "10"
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}
function Entrar() {
    let titulo = document.querySelector('h1#headtab')
    titulo.style.color = 'rgba(217, 255, 0, 1)'
}
function Sair() {
    let titulo = document.querySelector('h1#headtab')
    titulo.style.color = 'white'
}