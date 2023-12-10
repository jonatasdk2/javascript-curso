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
    alert('tudo ok')
    
  } else {
    alert('valor invalido ou já encontrado na lista')
  }
    


  
}

