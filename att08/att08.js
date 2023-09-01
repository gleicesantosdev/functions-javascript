function calcdesconto(){
    var valor = parseFloat(document.querySelector('#valor').value); 
    var taxa = parseFloat(document.querySelector('#taxa').value);
    resultado = (document.querySelector('#Resultado'));
    resultado.textContent = valor * (taxa/100);

    final() 

        function final(){
        var valor = parseFloat(document.querySelector('#valor').value); 
        var desconto = parseFloat(document.querySelector('#Resultado').textContent);
        var final = (document.querySelector('#final'));

        final.textContent = valor - desconto; 
        }
}