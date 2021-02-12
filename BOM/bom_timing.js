let x = 0
setInterval(() => {
  console.log('Olá Mundo')
  x++
}, 2000);

if(x > 3 ){
  clearInterval()
}