//ques11
const numero = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const filtroNovo = [];


const filtroDosNumeros = function(numeros){
    for(let i=0; i < numeros.length; i++){
        if(numeros[i] >= 10){
            filtroNovo.push(numeros[i]);
            console.log("Numeros Filtrados ==>", numeros [i])
    
        }
    }
}



const filtroDosQuadrado = function(){
    for(let i=0; i < filtroNovo.length; i++){
        resultado = filtroNovo[i]**2;
        console.log("O quadrado do número", filtroNovo[i], "é ==>", resultado);
        
    
        }
}

console.log("-- NUMEROS FILTRADOS:")
filtroDosNumeros(numero);
console.log("=========>")
console.log("-- QUADRADO DO NÚMERO:")
filtroDosQuadrado()

