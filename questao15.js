//questão15
//PRECISEI DE MUITA AJUDA
let aux = 0;

const somarMatriz = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            aux += matrix[i][j]; 
        }
    }

    return aux;
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(somarMatriz(matriz)); 
