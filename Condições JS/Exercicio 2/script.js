function verificar() {

alert('funcionou')
var data = new Date ()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || fano.value > ano){

    window.alert ('[ERRO] verifique od das e tente novamente !')

}else {
    var fsex = document.getElementsByTagName('radsex')
    var idade = ano - Number (fano.value)
    var genero = ''
    if (fsex [0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade <10){
            //crianca
        }else if (idade < 21){
            //jovem
        } else if (idade < 50){
        //adulto
    }else {
        //idoso
    }


    }else if (fsex [1].checked){
        genero = 'mulher'
        if(idade >= 0 && idade <10){
            //crianca
        }else if (idade < 21){
            //jovem
        } else if (idade < 50){
        //adulto
    }else {
        //idoso
    }


    }

res.getElementsByClassName.texAling = 'center'
res.innerHTML = `Detectamos ${genero} com ${idade} anos`
}




}