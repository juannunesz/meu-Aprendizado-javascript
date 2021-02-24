// objeto literal
let a1 = {
  cor: 'Branco',
  modelo: 'Airbus a380',
  levantarVoo = () => {
    console.log('Levantando voo')
  }
}

//Função construtora
let aviaoF = () => {
  this.cor = 'Azul',
  this.modelo = 'Boing 787',
  this.levantarVoo = () => {
    console.log('Levantando voo')
  }
}
let a2 = new aviaoF()

// Classe 

class AviaoC {
  constructor(){
    this.cor = 'Vermelho',
    this.modelo = 'Embraer E-Jets'
  }
  levantarVoo(){
    console.log('Levantando voo')
  }
}

let a3 = new AviaoC()

console.log(a1)
console.log(a2)
console.log(a3)