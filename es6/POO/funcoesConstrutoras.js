

let Carro = function(){
  this.color = 'Azul'
  this.modelo = 'Honda'
  this.velocidadeAtual = 0
  this.velocidadeMaxima = 200

  this.acelerar = () => this.velocidadeAtual += 10

  this.getVelociade = () =>  this.velocidadeAtual
  
  this.setVelocidade = velociade => this.velocidadeAtual = velociade
  
}

let carro = new Carro()

carro.setVelocidade(120)

carro.acelerar()

console.log(carro.getVelociade())