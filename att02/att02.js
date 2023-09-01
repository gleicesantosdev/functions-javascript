function verificar() {
    var num = parseInt(document.getElementById('num').value);
    var resultado = document.getElementById('resultado');
    
    if (num % 2 == 0) {
        resultado.innerHTML = "O número é par";
    } else {
        resultado.innerHTML = "O número é ímpar";
    }
}