let idade = function(numero){
    
    if(numero < 18){
        console.log("Você é menor de idade!")
    } else if(numero >= 18){
        console.log("Você é maior de idade!")
    }

    return numero;
}


console.log(idade(100))