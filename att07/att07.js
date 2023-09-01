function maior(){
    var num1 = parseInt(document.querySelector('#num1').value);
    var num2 = parseInt(document.querySelector('#num2').value);
    var num3 = parseInt(document.querySelector('#num3').value);
    var resultado = (document.querySelector('#Resultado'));

    if(num1 > num2 && num1 > num3){
        return resultado.textContent = "O "  +num1+ " é maior"
    }
    else if (num2 > num1 && num2 > num3){
        return resultado.textContent = "O " +num2+ "é maior"
    }
    else {
        return resultado.textContent = "O " +num3+ "maior"
    }
}