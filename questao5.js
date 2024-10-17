const numeros = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10]


const osPares = numeros.filter(function(numero){
  return numero % 2 == 0;
});

const multiplicacao = osPares.map(function(numero){
  return numero*2;
});


console.log("Numeros Pares:",osPares)
console.log("Multiplicação dos números:",multiplicacao)




