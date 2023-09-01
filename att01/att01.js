function somar() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var res = document.getElementById('resultado');
    var resultadoSoma = num1 + num2;
    res.innerHTML = "Resultado: " + resultadoSoma;
}