//QUESTÃO 10

const numeroPrimo = function(numero) {
    if (numero < 2) {
        console.log("Seu número ==>", numero, "não é primo.");
        return;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            console.log("Seu número ==>", numero, "não é primo.");
            return;
        }
    }

    console.log("Seu número ==>", numero, "é primo.");
}


numeroPrimo(10); 
numeroPrimo(5);  
numeroPrimo(7);   
numeroPrimo(12);  
numeroPrimo(2);   
numeroPrimo(3);   
