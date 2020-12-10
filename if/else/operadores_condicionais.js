
var media = 7 ;

var nota1 = prompt('Digite sua primeira nota');

var nota2 = prompt('Digite sua segunda nota');

var nota3 = prompt('Digite sua terceira nota');

var nota4 = prompt('Digite sua quarta nota');

var notaFinal = nota1 + nota2 + nota3 + nota4 / 4;

document.write('<h1> sua notal final é: ' + notaFinal + '</h1>');

if (notaFinal >= media) {
    document.write('<h1> Você está aprovado</h1>');
} else {
    document.write('<h1>Você está reprovado</h1>');
}



