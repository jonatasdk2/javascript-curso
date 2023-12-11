var num = document.getElementById('txti')
var list = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []


function isnumero(n) {
  if (Number(n)>=1 && Number(n)<=100) {
    return true
  } else {

    return false
  }
  
}

function inlist(n,l) {

  if (l.indexOf(Number(n)) != -1) {

    return true
    
  } else {
    return false
  }
  
}

function adicionar() {
  if (isnumero(num.value) && !inlist(num.value,valores)) {
   valores.push(Number(num.value))
   let item = document.createElement('option')
   item.text=`valor ${num.value} adicionado`
   list.appendChild(item)
   res.innerHTML = ''
    
  } else {
    alert('valor invalido ou já encontrado na lista')
  }
    
  num.value=''
  num.focus()

  
}

function finalizar(){ 
  if (valores.length == 0) {
    alert('adicione um valor a lista')
    
  } else {
    let tot = valores.length;
    let maior = valores[0]
    let menor = valores [0]
    let soma = 0;
    let media = 0
    for (let c = 0; c < valores.length; c++) {
     soma +=valores[c] 
    if (valores[c] > maior) {
    maior= valores[c]
    }  
    if (valores[c] < menor) {
    menor= valores[c]
    }
    media= soma/tot
    }

    res.innerHTML= ''
    res.innerHTML += `<p>o total de números cadastrados é ${tot}</p>`
    res.innerHTML += `<p>o maior numero é ${maior}</p>`
    res.innerHTML += `<p>o menor numero é ${menor}</p>`
    res.innerHTML += `<p>a soma de todos os números é ${soma}</p>`
    res.innerHTML += `<p>a média de todos os números é ${media}</p>`
  }  
    
}  
  
  

