class Tv {
  constructor(){
    this._realcaoCanais = Array(4,7,10,15,5)
    this._canalAtivo = 10
    this._volume = 5
  }

  get canalAtivo(){ 
    return this._canalAtivo
  }

  set canalAtivo(canal){
    this._canalAtivo = canal
  }

}

let tv = new Tv()

console.log(tv.canalAtivo)