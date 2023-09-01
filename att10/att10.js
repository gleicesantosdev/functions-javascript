function fatorial(){
    var num1 = parseInt(document.querySelector('#num1').value);
    var resultado = (document.querySelector('#Resultado'));

    if (num1 === 0 || num1 === 1) {
        return resultado.textContent= 1;
    } else {
        let fatorial = 1;
        for (let i = 2; i <= num1; i++) { 
            fatorial *= i; 
        }
        return resultado.textContent = fatorial;
    }
}