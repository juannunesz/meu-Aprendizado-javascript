
// Atribuição de variáveis

var nome = prompt('Insira seu nome:')

var altura = prompt('Insira sua altura em cm:')

var peso = prompt('Insira o seu peso:')

var classificacao = undefined


// transformando em float
altura = parseFloat(altura)
peso = parseFloat(peso)

// Passando altura de centimetros para metros
altura = (altura / 100)


// Calculo do IMC
var massa = peso / (altura**2)

// Testes condicionáis

if (massa < 16){
    classificacao = 'Baixo peso muito grave'
}else if(massa >= 16 && massa <= 16.99){
    classificacao = 'Baixo peso grave'
}else if (massa >= 17 && massa <= 18.49) {
    classificacao = 'Baixo peso'
}else if (massa >= 18.50 && massa <= 24.99){
    classificacao = 'Peso normal'
}else if (massa >= 25 && massa <= 29.99) {
    classificacao = 'Sobrepeso'
}else if (massa >= 30 && massa <= 34.99) {
    classificacao = 'Obesidade grau 1'
}else if (massa >= 35 && massa <= 39.99) {
    classificacao = 'Obesidade grau 2'
}else{
    classificacao = 'Obesidade grau 3'
}

// Transformando em inteiro para facilitar vizualização
massa = parseInt(massa)

//Resultado
document.write(nome + ' possui índice de massa corporal igual a ' +
massa + ', sendo classificado como: ' + classificacao)



