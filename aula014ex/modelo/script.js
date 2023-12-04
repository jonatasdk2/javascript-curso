function verificar(params) {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[erro] verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.style.textAlign = 'center'
        img.style.paddingTop = '20px'
        
         
        if (fsex[0].checked) {
            genero = 'Homem'
            
            if (idade>= 0 && idade <10) {
                img.setAttribute('src','imagens/bebe homem.png')
                
            } else if(idade >= 10 && idade < 20) {

                img.setAttribute('src','imagens/homem jovem.png')
                
            }
            else if (idade >=20 && idade <50) {

                img.setAttribute('src','imagens/homem adulto.png')
                
            }
            else if(idade >= 50 && idade <150) {

                img.setAttribute('src','imagens/homem idoso.png')
            }
        } else if(fsex[1].checked) {
            genero = 'mulher'
            
            if (idade>= 0 && idade <10) {
                img.setAttribute('src','imagens/bebe mulher.png')
                
            } else if(idade >= 10 && idade < 20) {

                img.setAttribute('src','imagens/mulher jovem.png')
                
            }
            else if (idade >=20 && idade <50) {

                img.setAttribute('src','imagens/mulher adulta.png')
                
            }
            else if(idade >= 50 && idade <150) {

                img.setAttribute('src','imagens/mulher idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    
}