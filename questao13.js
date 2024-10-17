//questão13
const lista = ["Avião", "Boneca", "Dragão", "Cuzcuz", "Arroz"];
const remover = [];


const retirarIndice = function(palavra, index) {
    if (index >= 0 && index < lista.length) { 
        const retirar = lista.splice(index, 1)[0];
        remover.push(retirar);
        lista.splice(index, 0, palavra);
        console.log("Palavra removida ==> ", retirar);
        console.log("Lista alterada ==>", lista)
        
    } else {
        console.log("Índice não encontrado");
    }
};


console.log(retirarIndice("tatame", 1))
console.log(retirarIndice("tatame", 4))
