
var objetos = Array('Cadeira','Impressora','Garfo') 

 function verifica(){
   var valorCampo = document.getElementById('inputPrincipal').value
   if(valorCampo == ''){
     alert('Informe um valor válido')
   }else{
    if(objetos.indexOf(valorCampo)!= -1){
      alert('Objeto já foi adicionado')
      document.getElementById('inputPrincipal').value = ''
    }else{
      objetos.push(valorCampo)
      console.log(objetos)
      document.getElementById('inputPrincipal').value = ''
    }
   }
 }
 
 function ordena(){
   objetos.sort()
   console.log(objetos)
 }