//questão2

let numeroEscolha = function(numero) {
aux = 0;

for (i = 0; i <= numero; i++) {
    valor = i;
    aux += valor;
    console.log(valor + "!");
}
    

    return aux;

}


numeroEscolha(5);
console.log("Resultado:",aux);