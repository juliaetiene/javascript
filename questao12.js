//questao12

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somar = listaNumeros.reduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual;
}); 

console.log("Soma dos itens ===> ",somar);