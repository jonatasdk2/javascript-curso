function carregar(params) {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `agora são ${hora} horas ${min} minutos.`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manhã.png'
        document.body.style.background ='#d46d81c'
    } else if (hora >= 12 && hora <=18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background ='#80c6fb'
    }else {
        img.src = 'imagens/noite.png'
        document.body.style.background ='#181f28'
    }
    
}

