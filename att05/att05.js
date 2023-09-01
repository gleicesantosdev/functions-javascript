function triangulo(){
    var num1 = parseInt(document.querySelector('#num1').value);
    var num2 = parseInt(document.querySelector('#num2').value);
    var num3 = parseInt(document.querySelector('#num3').value);
    var resultado = (document.querySelector('#Resultado'));

    if((num1 + num2) > num3 ){
        return resultado.textContent = "É Triângulo!"
    }
    else 
        return resultado.textContent = "Não é triângulo!"
}