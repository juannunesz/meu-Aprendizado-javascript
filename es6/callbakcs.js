function newButton(text){

  const $body = document.querySelector('body');
  
  const $button = document.createElement('button');
  
  $button.textContent = text;
  
  $body.insertAdjacentElement('beforeend',$button);

  return $button
}

const login = newButton('Login')
const singUp = newButton('Sing Up')

console.log(login)
console.log(singUp)

login.style.cssText = `
  color: red;
`

login.addEventListener('click', () => {
  console.log('Fazendo login');
})

singUp.style.cssText = `
  color: green;
  text-transform: uppercase;
  background: black;
`

singUp.addEventListener('click', () => {
  console.log('Fazendo login');
})



