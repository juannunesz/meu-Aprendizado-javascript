let Carro = function(){

  let velocidadeMaxima = 200

  let quilometrosRodados = 0

  this.color = 'Azul'
  this.modelo = 'Honda'
  this.velocidadeAtual = 0

  this.acelerar = () => {
    this.velocidadeAtual += 50
    if(this.velocidadeAtual >= velocidadeMaxima){
     this.velocidadeAtual = velocidadeMaxima
    }

    setQuilometrosRodados(0.05)
    console.log(quilometrosRodados)
  }

  this.getVelociadeAtual = () =>  this.velocidadeAtual
  
  this.setVelocidade = velociade => this.velocidadeAtual = velociade

  let setQuilometrosRodados = (km) => {
    quilometrosRodados += km
  }
  
}

let carro = new Carro()

console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)







