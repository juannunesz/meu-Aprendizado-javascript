
// While 
var x = 1

while(x <= 10){
  console.log('Rodando..',x)
  if(x == 5){
    continue
  }
  x++
}


// Do While 
var x = 11

do{
  console.log(x)
}while(x <= 10)


// Comando for

var numeros = Array()

for(var i = 1; i <= 10; i ++){
  numeros.push(i)
}

console.log(numeros)  


// laços encadeados

for(var y = 1; y <= 10; y++){
  for(var x = 1; x <= 10 ;x++){
    console.log(y + ' x ' + x + ' = ' + (y * x))
  }
}



// For in 


var listaConvidados = Array()

listaConvidados['a'] = 'Amanda'
listaConvidados['b'] = 'Breno'
listaConvidados[2] = 'Jamilton'


console.log(listaConvidados)

for(var convidados in listaConvidados){
  console.log(listaConvidados[convidados])
}




// for each

var listaFuncionarios = Array('Viviane','Pedro','Rosangela','Miguel','Lucas')

console.log(listaFuncionarios)

listaFuncionarios.forEach(function(valor,indice,array){
  //lógica
  console.log('Indice '+ array)
})





