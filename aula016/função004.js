function fatorial(n) {

    let fat =1
    for (let c = n; c > 1; c--) {
    
        fat *= c
    }
    return fat
}


console.log(fatorial(5)) 



let valores =[1,2,3,4,5]
let maior = valores[0]
let menor = valores[0]

for (let c = 0; c < valores.length; c++) {
  if (valores[c] > maior) {
    maior= valores[c]
  }  
  if (valores[c] < menor) {
    menor= valores[c]
  }
    
}
console.log(`maior é ${maior} e menor é ${menor}`)