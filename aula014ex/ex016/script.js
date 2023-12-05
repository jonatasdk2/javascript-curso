function calcular(params) {
    
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var result = document.getElementById('res')
    

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
      alert('erro')
        
    }else{
      result.innerHTML = 'contando: <br/>'
      let i =Number(ini.value)
      let f =Number(fim.value)
      let p =Number(passo.value)

      if (p <= 0) {
        alert('passo invalido considerando passo como 1')
        p = 1
        
      }

      if (i < f) { //contagem crescente
        for (let c = i; c <= f; c += p) {
          result.innerHTML += `${c} \u{1f449}`
          
        }
        
      }else{ // contagem regressiva
        for (let c = i; c >=f; c -= p) {
          result.innerHTML += `${c} \u{1f449}`
          
        }

      }
     
      result.innerHTML += `\u{1f3c1}`
    }
}

