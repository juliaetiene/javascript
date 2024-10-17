//questão14
//precisei de ajuda 

const ehPalindromo = function(nome) {
    const tamanho = nome.length;

    for (let i = 0; i < tamanho / 2; i++) {
        if (nome[i] !== nome[tamanho - 1 - i]) {
            console.log("A palavra ==> ", nome, "não é Palindromo.")
            return false; 
        }
    }
    console.log("A palavra ==> ",nome, "é Palindromo.")
    return true; 

}

console.log(ehPalindromo("ana"));