function carregar() {
    var msg = window.document.getElementById('msg')
    var img =  window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas` 
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'static/imgs/manha.png'
        document.body.style.background = '#4c5c7d'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'static/imgs/tarde.png'
        document.body.style.background = '#ef9b76'
    } else{
        // BOA NOITE
        img.src = 'static/imgs/noite.png'
        document.body.style.background = '#002144'
    }
}