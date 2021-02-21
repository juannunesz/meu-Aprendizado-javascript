
class Produto {
  constructor(descricao,preco){
    this.descricao = descricao
    this.preco = preco
  }

  verDescricao(){
    console.log(`${this.descricao} por apenas ${this.preco} Reais`)
  }
}

let produto = new Produto('Um bom produto',150)

let produtoLiteral = {
  descricao: 'Um Otimo produto',
  preco: 120,
  verDescricao: () => console.log(`${produtoLiteral.descricao} por apenas ${produtoLiteral.preco} Reais`)
  
}

produto.verDescricao()

produtoLiteral.verDescricao()