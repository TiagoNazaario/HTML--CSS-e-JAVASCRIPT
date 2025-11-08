function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var idademin = ano - 150
    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < idademin) {
        window.alert('!ERRo! Verifique os dados e tente de novo')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 14) {
                // Criança
                img.setAttribute('src', "static/imgs/criança-homem.png")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', "static/imgs/jovem-adulto.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', "static/imgs/homem-adulto.png")
            } else {
                // Idoso
                img.setAttribute('src', "static/imgs/idoso.png")
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                // Criança
                img.setAttribute('src', "static/imgs/criança-mulher.png")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', "static/imgs/jovem-mulher.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', "static/imgs/mulher-adulta.png")
            } else {
                // Idosa
                img.setAttribute('src', "static/imgs/idosa.png")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}