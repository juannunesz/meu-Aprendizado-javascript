
var largura = prompt('Digite a largura do terreno')
var comprimento = prompt('Digite o comprimento do terreno')


function calcularAreaTerreno (largura , comprimento){

    //lógica
    var area = largura * comprimento

    return area
}

var area = calcularAreaTerreno(largura,comprimento) 

document.write('O tamanho do terreno é de ' + area +
' metros quadrados')

