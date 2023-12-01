var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log (`são exatamente ${hora} horas ${min} minutos`)
if (hora >= 6 && hora <12 ) {
    console.log('bom dia')
} else if( hora <=18 && hora >=12){
    console.log('Boa tarde')
}else if (hora < 24 && hora >18) {
    console.log('boa noite')
} else if(hora < 6){
    console.log('boa madrugada')
}