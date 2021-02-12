// tratamento de erros 
const video = Array()

video[1] = Array()
video[1]['nome'] = 'Naruto'
video[1]['categoria'] = 'Anime'

function getVideo(video){
  try{
    //logica 
    //http
    console.log(video[0]['nome'])
  }catch(erro){
    trataErro(erro)
    console.log('Video não está mais disponivel')
    throw new Error('Houve um erro mas não se preocupe')
  }finally{
    console.log('Sempre passa por aqui (try/catch)')
  }

}

function trataErro(e){
  console.log(e)
}

getVideo(video)

console.log('A aplicação não morreu')