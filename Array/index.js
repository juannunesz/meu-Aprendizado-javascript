
var lista_frutas = ['Banana','maça','Morango','Uva']

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maça'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

console.log(lista_frutas)

console.log("juan comeu uma",lista_frutas[0])

for (var i= 0; i < lista_frutas.length; i++) {
  console.log('Na posisção '+ i + ' está a fruta ' + lista_frutas[i])
}


// Array multidimensional

var listaCoisas = Array()

listaCoisas['frutas'] = Array('Banana','Maça','Morango','Uva')
listaCoisas['pessoas'] = Array('Juan','Monica','Marcelo')

console.log(listaCoisas['pessoas'][0])



// Inclir e remover 

lista_frutas = Array('Banana','Maçã')

console.log(lista_frutas)

// Incluir elemento no final do Array

lista_frutas.push('Uva')

console.log(lista_frutas)

// Incluir elemento no inicio do Array

lista_frutas.unshift('Pera')

console.log(lista_frutas)

// Excluir elemento do final do array

lista_frutas.pop()

console.log(lista_frutas)
// Excluir elemento do inicio do arraty

lista_frutas.shift()

console.log(lista_frutas)



var lista_coisas = Array()

lista_coisas['pessoas'] = Array()
lista_coisas['frutas'] = Array()

lista_coisas['pessoas'].push('Juan')
lista_coisas['pessoas'].unshift('pedro')

console.log(lista_coisas['pessoas'])



// Pesquisa de elementos 

var lista_frutas = Array('Banana','Maça','Morango','Uva')

lista_frutas.push('Abacaxi')

if(lista_frutas.indexOf('Abacaxi') == -1){
  console.log("Item não encontrado")
  lista_frutas.push('Abacaxi')
  console.log("Item foi adicionado")
}else{
  console.log('Elemento existe e está na posição',lista_frutas.indexOf('Abacaxi'))
}

console.log(lista_frutas)


// Ordenando array

var lista_frutas = Array('Maça','Uva','Banana','Morango')

//console.log(lista_frutas.sort())

var lista_numeros = Array(2,5,235,5325,3)

console.log(lista_numeros.sort(ordenaNumeros))

function ordenaNumeros(a,b){
  return a - b
}


