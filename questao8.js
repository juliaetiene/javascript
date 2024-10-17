//questão8

const numeros = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15]


const osInpares = numeros.filter(function(numero){
  return numero % 3 == 0;
  
});

const quantidadeDeNumeros = osInpares.length;


console.log("Numeros Multiplos de 3:",osInpares)
console.log("A quantidade de numeros é:", quantidadeDeNumeros)