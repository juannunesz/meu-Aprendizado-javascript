
class ContBancaria{

  constructor(){
    this.agencia = 1075
    this.numeroConta = 8351125
    this.saldo = 50
    this.limite = 450
  }

  depositar(valorDeposito){
    this.saldo += valorDeposito
    console.log(`Saldo atual: ${this.saldo}`)
  }

  sacar(valorSaque){
    if(valorSaque > this.saldo || valorSaque <= 0){
      console.log('Não foi possivel realizar a transação')
    }else{
      this.saldo -= valorSaque
      console.log(`Saldo atual: ${this.saldo}`)
    }
  }

  consultarSaldo(){
    console.log(`Saldo: ${this.saldo}`)
  }
}


// Cadeira 

class Cadeira{

  constructor(quantidadePernas = 4, giratoria = false, cor = 'Marrom'){
    this.quantidadePernas = quantidadePernas
    this.giratoria = giratoria
    this.cor = cor
  }

  girarCadeira(){
    if(this.giratoria === true){
      console.log('Cadeira Girando ...')
    }else{
      console.log('Essa cadeira não é giratoria')
    }
  }

}

let c1 = new Cadeira(1,true, 'Azul')

console.log(c1)




