

var media = 7 ;

var nota1 = prompt('Digite sua primeira nota');

var nota2 = prompt('Digite sua segunda nota');

var nota3 = prompt('Digite sua terceira nota');

var nota4 = prompt('Digite sua quarta nota');

var faltas = prompt('Digite a quantidade de faltas')

var notaFinal = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4;

document.write('<h1> sua notal final é: ' + notaFinal + '</h1>');

if (notaFinal >= media && faltas <= 30) {
    document.write('<h1 style="color:green;">Você está aprovado </h1>');
} else {
    document.write('<h1 style="color:red;">Você está reprovado</h1>');
}


document.write('<hr>')


// Com operado ternário 

var resultado = (notaFinal >= media && faltas <= 30) ? 
'<h1 style="color:green;">Você está aprovado </h1>' 
: 
'<h1 style="color:red;">Você está reprovado</h1>';

document.write(resultado)









