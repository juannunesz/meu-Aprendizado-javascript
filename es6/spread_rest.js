
//string 

let tituloArtigo = 'Como utilizar o operador Rest/Spread'

//console.log(...tituloArtigo)

// console.log([...tituloArtigo])

// Arrays 

let listaCursos1 = ['Nodejs e MongoDB' , 'React, ES6 , Typescript']
let listaCursos2 = ['Multiplataforma Andoid/IOS', 'Introdução ao GNU/Linux']
let listaCursosCompleto = ['Web Compelto', 'Android Completo', ...listaCursos1, ...listaCursos2]

//console.log(listaCursosCompleto)

//Objetos

let pessoa = { nome: 'João', idade: 27}
let clone = { endereco: 'Rua Abc' , ...pessoa}

console.log(clone)