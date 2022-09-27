var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar (){
    if(isNumero(num.value) && !inlista(num.value , valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
     
    }else if (num.value.length== 0 ){
        window.alert ('digite um numero!')
    }

      else{  window.alert ('Valor invalido ou ja foi inserido!')
    }
    num.value = ''
    num.focus() 
}

function finalizar(){
    if ( valores.length == 0 ){
        alert('Adicione um valor antes de finalizar!')
    }else {
        var total = valores.length
        var maior = valores[0] 
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(var pos in valores ){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
         
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${total} Numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi: ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi: ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é: ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores é: ${media}</p>`
    }
}