function centimetros(){
    var num = parseInt(document.querySelector('#num').value);
    var resultado = (document.querySelector('#Resultado'));
    resultado.textContent = num * 2.54;
}