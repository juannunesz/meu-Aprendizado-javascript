/*

// adicionar ou remover dias
var data = new Date()

document.write(data.toString())

data.setDate(data.getDate() + 1)

document.write('<hr>')

document.write(data.toDateString())

document.write('<br><hr>')

//  adicionar ou remover meses

document.write(data.toString())

data.setMonth(data.getMonth() + 1)

document.write('<hr>')

document.write(data.toDateString())
document.write('<br><hr>')

//  adicionar ou remover meses

document.write(data.toString())

data.setFullYear(data.getFullYear() + 1)

document.write('<hr>')

document.write(data.toDateString())
 */



 // 15/01/2021

 var data1 = new Date(2021,0,15)

 // 23/02/2021

 var data2 = new Date(2021,1,23)


 document.write(data1.toString())
 document.write('<hr/>')
 document.write(data2.toString())

 document.write('<br/> <hr/>')

 // Converter as datas para algo que podemos calcular 

 document.write(data1.getTime())
 document.write('<hr/>')
 document.write(data2.getTime())

document.write('<hr>')
 // 1 de janeiro de 1970

// Encontrar a quantidade de milisegundos entre data1 e data2

var milisegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())

document.write(milisegundos_entre_datas)

document.write('<br/> <hr/>')

document.write(Math.abs(data1.getTime() - data2.getTime()))

document.write('<hr>')

// conta de quantos milisegundo tem em um dia 

var milisegundo_por_dia = (1*24*60*60*1000) 

document.write('Em um dia tem: ' + milisegundo_por_dia + ' Milissegundos' )

document.write('<br/> <hr/>')

document.write('A diferença de dias entre data1 e data2 são de ' 
+ Math.ceil(milisegundos_entre_datas / milisegundo_por_dia) + ' dias')


