function carregar(){
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagens')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        msg1.innerHTML = 'BOM DIA'
        document.body.style.backgroundColor = ' bisque'
    }else if(hora >= 12 && hora < 18){
        msg1.innerHTML = 'BOA TARDE'
        document.body.style.backgroundColor = '#ccc'
        img.src = '/image/fototarde.png'
    }else {
        msg1.innerHTML = 'BOA NOITE'
        document.body.style.backgroundColor = 'black'
        img.src = '/image/fotonoite.png'
        
    }
}