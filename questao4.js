//questão4


let fatorial = function(numero) {
    aux = 1;
    
    for (i = 1; i <= numero; i++) {
        valor = i;
        resultado = aux *= valor;
        console.log(valor + "!");
    }
        
    
        return resultado;
    
    }
    
    
    fatorial(5);
    console.log("Resultado:",resultado);
