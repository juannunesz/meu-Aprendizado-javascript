
let nome =  'Juan'
let idade = 19
let sexo = 'Masculino'
let profissao = 'Programador'

let objeto = {
    nome: nome,
    idade: idade, 
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Sexo: ${this.sexo}
      Profissão: ${this.profissao}`)
    }
}

let objeto2 = {
  nome,
  idade, 
  sexo,
  profissao,
  exibirResumo() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Sexo: ${this.sexo}
    Profissão: ${this.profissao}`)
  }
}

// Objeto Literal modificando valores
/*
let pessoa = {
  nome: 'Jose',
  idade: 45
}

pessoa.nome = 'Juan'

*/

// Incluindo novos atibutos no objeto literal

/*
let pessoa = {
  nome: 'Maria',
  idade: 25
}
pessoa.sexo = 'Feminino'
*/

// Objetos unicos 

let assinatura = {
  idCliente: 1000,
  descriacao: 'Acesso a internet',
  status(){
    console.log('Ativo')
  }
}

console.log(assinatura.descriacao)

let y = assinatura

console.log(y.descriacao)

y.descriacao = 'Internet + tv + telefone'

console.log(assinatura.descriacao)
console.log(y.descriacao)









