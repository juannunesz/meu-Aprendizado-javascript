/*
function calcularAreaSquare(largura,comprimento){
  if(largura == 0 || comprimento == 0){
    return "Não foi possivel calcular"
  }
  var result = largura * comprimento
  return result
}

var a  = calcularAreaSquare(10)

console.log("Resultado da operação deu",a)


function soma(a,b){
  if(b == undefined){
    b = 0
  }
  return a + b
}
console.log('Valor da soma é: ',soma(1))

// Função anônima 

var ola = function(nome){
  console.log('Olá,'+ nome + ' tudo bem??')
}
ola('juan')

// função de callback

function exibitArtigo(id,callbackSucesso,callbackErro){
  if(true){
    callbackSucesso('Deu bom','peguei o id')
  }else{
    callbackErro('ERRO ao recuperar os dados')
  }
}

var callbackSucesso = function(titulo,descricao){
  console.log(titulo)
  console.log(descricao)
}

var callbackErro = function(erro){
  console.log(erro)
}

exibitArtigo(1,callbackSucesso,callbackErro)


// propiedades com string

var nome = 'Juan nunes'

console.log(nome.length)

console.log(nome.charAt(5))

console.log(nome.indexOf('n'))

console.log(nome = nome.replace('nunes','oliveira'))

console.log(nome.substr(5,8))

console.log(nome.toUpperCase())



// propiedades matematicas

var x = Math.floor(10.380) // arredonda para biaxo

console.log(x)

var y = Math.ceil(10.380)  // arredonda para cima 

console.log(y)

var z = Math.round(10.50)  // arredonda dependendo da media

console.log(z)

var numero = Math.random() // gera um numero aleatorio entre 0 e 1

console.log(numero)

*/

// propiedades datas

var data = new Date()

data.setDate(25)

data.setFullYear(2025)

console.log(data.getDate() + '/'+ (data.getMonth()+1) + '/' + data.getFullYear())






