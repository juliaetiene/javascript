//ques6

const lista = ["Avião", "Boneca", "Caminhão"]
const removido = []

const adicionar = function(letra){
    lista.push(letra);
    console.log(lista)
    return lista;
    
}

const retirar = function(){
    if(lista.length > 0){
        const coisaRemovido = lista.pop();
        removido.push(coisaRemovido);
        console.log("==> Foi removido com sucesso")
        console.log("Lista atualizada: ")
        console.log(lista);
        return lista

    }else{
        console.log("A lista está vazia")
    }
}

adicionar("Dragão")
adicionar("Elefante")
adicionar("Flauta")
retirar()