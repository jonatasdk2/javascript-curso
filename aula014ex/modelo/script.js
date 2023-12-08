function t() {

    let n1 = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (n1.value.length ==0) {
    window.alert('digite um numero')        
    } else {
        let n = Number(n1.value)
        tab.innerHTML = ''

        for (let c = 0; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            item.value = `tab${c}`
            tab.appendChild(item)
            
        }
        
    }
    
}