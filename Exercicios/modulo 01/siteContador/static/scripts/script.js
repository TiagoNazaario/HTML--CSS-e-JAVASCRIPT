function Contar() {
    var inicio = document.querySelector('input#nInc').value
    var fim = document.querySelector('input#nFim').value
    var passo = document.querySelector('input#nPasso').value
    var res = document.querySelector('div#res')
    //res.innerHTML = `Voçê digitou inicio:${inicio}, Fim:${fim} e Passo:${passo}`

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        if ((inicio.length == 0 && fim.length == 0 && passo.length == 0) ||(inicio.length == 0 && fim.length == 0) || (fim.length == 0 && passo.length == 0) || (inicio.length == 0 && passo.length == 0)) {
            window.alert(`!ERRo! por favor preencha todos os campos`)
        } else if (inicio.length == 0 && fim.length == 1 && passo.length == 1) {
            window.alert(`!ERRo! preencha o campo "Ínicio"`)
        } else if (fim.length == 0 && inicio.length == 1 && passo.length == 1) {
            window.alert(`!ERRo! preencha o campo "Fim"`)
        } else if (passo.length == 0 && inicio.length == 1 && fim.length == 1) {
            window.alert(`!ERRo! preencha o campo "Passo"`)
        } 
    } else {
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if (i < f) {
            res.innerHTML = 'Contando: '
            while (i <= f) {
                res.innerHTML += `${i}`
                i += p
                if (i <= f) {
                    res.innerHTML += ` \u{1F449}	 `
                }
            }
        } else {
            res.innerHTML = 'Contando: '
            while (i >= f) {
                res.innerHTML += `${i}`
                i -= p
                if (i >= f) {
                    res.innerHTML += ` \u{1F449}	 `
                }
            }
        }
    }
}
