function Desafio(){
    const chopps = 10;
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);
    let resultado = (document.querySelector('#Resultado'));
    let desconto = num1*chopps;
    let sdesconto = num2*chopps;
    
    resultado.textContent = desconto + sdesconto + (sdesconto *0.1);
    } 