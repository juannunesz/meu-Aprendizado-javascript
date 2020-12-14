
var numero1 = prompt('Digite o primeiro número:')

var operacao = prompt('Digite a operação "soma" ou "subtração"')

var numero2 = prompt('Digite o segundo número:')



function calculo(numero1, numero2, operacao) {

    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)

    var resultado = 0

    if (operacao == 'soma') {
       resultado = numero1 + numero2
    }if (operacao == 'subtracao'){
      resultado =  numero1 - numero2
    }

    document.write('O resultado é : '+ resultado)
}

calculo(numero1,numero2,operacao)


