
let bicicletaFactory = (cor = 'Preta',marcha = 'Unica' ,aro = 12) => {
  return {
    cor,
    marcha,
    aro,
    pedalar(){console.log('Pedalando...')}
  }
}

let bicicleta3 = bicicletaFactory()
console.log(bicicleta3)

let bicicleta2 = bicicletaFactory('Vermelha', 12, 13)

console.log(bicicleta2)
