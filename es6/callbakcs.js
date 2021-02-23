function newButton(text, callback){

  const $body = document.querySelector('body');
  
  const $button = document.createElement('button');

  callback($button,$body)
  
  $button.textContent = text;
  
  $body.insertAdjacentElement('beforeend',$button);

  return $button
}

 newButton('Login', (button,body) => {
  button.style.cssText = `
    font-size :100px;
  `
  button.addEventListener('click', () => {
    document.write('OI')
  })
 })
 newButton('Sing Up', (button) => {
  button.style.cssText = `
    font-size: 80px;
    color: red;
    background: black;
  `
 })






