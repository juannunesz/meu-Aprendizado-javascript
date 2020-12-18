
function mudarCor (cor) {
    document.getElementById('barra').style.background = cor
}

function voltarNormal(cor) {

    var barra = document.getElementById('barra')

    
    if (barra.value.length < 8) {
        barra.style.background = 'red'
    }else {
        barra.style.background = 'green'
    }
}

