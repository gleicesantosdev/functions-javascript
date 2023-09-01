function Primo(){
    var num1 = parseInt(document.querySelector('#num1').value);
    var resultado = (document.querySelector('#Resultado'));

    if(n1 <= 1){
        return resultado.textContent = "Não é primo!";
    }
    for (let i=2; i <= Math.sqrt(n1); i++){

       if(n1 % i == 0) {
        return resultado.textContent = "Não é primo!&"; 
       }
    }

    resultado.textContent = "É primo!"; 
}