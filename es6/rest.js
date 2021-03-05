// contexto rest

function soma(...param){

  let resultado = 0

  //console.log(param)

  param.forEach(v => resultado += v)

  return resultado
}

//console.log(soma(3,8,5,7))

function multiplicacao(m, ...p){
  console.log(m, p)
}

multiplicacao(5,7,12,3,49)