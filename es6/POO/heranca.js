// Animal
class Animal{
  constructor(cor, tamanho){
    this.cor = cor
    this.tamanho = tamanho
  }

  dormir(){
    console.log('Dormindo...')
  }
}

//Cachorro 
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

// Passaro
class Passaro extends Animal{
  constructor(bico,cor,tamanho){
    super(cor,tamanho)
    this.bico = bico
  }

  voar(){
    console.log('Voando...')
  }
}

// Papagaio
class Papagaio extends Passaro {
  constructor(sabeFalar,cor,tamanho,bico){
    super(bico,cor,tamanho)
    this.sabeFalar = sabeFalar
  }

  falar(){
    console.log('Falando...')
  }
}

//Avestruz 
class Avestruz extends Passaro{
  constructor(){
    super()
  }

  enterrarCabeca(){
    console.log('Enterrando cabeça')
  }
}


let papagaio1 = new Papagaio(tru0e,'Verde',25,'Medio')
console.log(papagaio1)
papagaio1.voar()

let avestruz1 = new Avestruz()




