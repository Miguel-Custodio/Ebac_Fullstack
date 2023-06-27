
const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 8 },
    { nome: 'Pedro', nota: 5 },
    { nome: 'Ana', nota: 9 },
    { nome: 'Lucas', nota: 6 },
    { nome: 'Antonio', nota: 4 },
    { nome: 'Gian', nota: 3 },
    { nome: 'Miguel', nota: 10 },
];  

const obterAlunosDestaque = (alunos) => {
    const notaMaxima = Math.max(...alunos.map(aluno => aluno.nota));  
    return alunos.filter(aluno => aluno.nota > 6);
};  

const alunosDestaque = obterAlunosDestaque(alunos);
console.log(alunosDestaque);
