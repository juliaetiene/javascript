//questão 9

const alunos = [{nome: 'Ana', nota: 8}, {nome: 'Joana', nota: 2}, {nome: 'Alexandra', nota: 6}];


for(let i in alunos){
    if(alunos[i].nota <= 6){
        console.log("Aluno:", alunos[i].nome, "Nota:", alunos[i].nota,"==> Reprovado");
    }else
        console.log("Aluno:", alunos[i].nome, "Nota:", alunos[i].nota,"==> Aprovado");
    }
