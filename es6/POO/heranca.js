
class Animal{
  constructor(cor, tamanho){
    this.cor = cor
    this.tamanho = tamanho
  }

  dormir(){
    console.log('Dormindo...')
  }
}


class Cachorro extends Animal{
  constructor(){
    super('preto',30)
    this.orelhas = 'Grandes'
  }

  correr(){
    console.log('Correndo...')
  }
  rosnar(){
    console.log('Rosnando...')
  }
}


class Passaro extends Animal{
  constructor(){
    super('verde',10)
    this.bico = 'Pontudo'
  }

  voar(){
    console.log('Voando...')
  }
}

let cachorro = new Cachorro()
let passaro = new Passaro()

console.log(cachorro)
console.log(passaro)

cachorro.dormir()