function calcArea(){
    var num1 = parseInt(document.querySelector('#num1').value);
    var num2 = parseInt(document.querySelector('#num2').value);
    var resultado = (document.querySelector('#Resultado'));
    resultado.textContent = (num1*num2)/2;
}