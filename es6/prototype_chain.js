
Object.prototype.att50 = 'x'

let animal = { att1: 'a'}

let vertebrado = {__proto__:animal, att2: 'b'}

let ave = {__proto__:vertebrado, att3: 'c'}

console.log(ave.att1, ave.att50) 

