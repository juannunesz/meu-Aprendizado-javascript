const $button = document.querySelector('button')

const handlerClick = () => {
  console.log('Botão foi clicado')
}

$button.addEventListener('click',handlerClick);