function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 6 && hora < 12) {
        //MANHÃ
        msg.innerHTML = `Agora são ${hora} horas da manhã.`
        img.src = 'fotomanha.png'
        document.body.style.background = '#eecba1'
    } else if (hora >= 12 && hora < 18) {
        //TARDE
        msg.innerHTML = `Agora são ${hora} horas da tarde.`
        img.src = 'fototarde.png'
        document.body.style.background = '#af8070'
    } else if (hora >= 18 && hora <= 24) {
        //NOITE
        msg.innerHTML = `Agora são ${hora} horas da noite.`
        img.src = 'fotonoite.png'
        document.body.style.background = '#454d50'
    } else {
        //MADRUGADA
        msg.innerHTML = `Agora são ${hora} hora(s) da madrugada.`
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#21484f'
    }
}