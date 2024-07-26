const prompt = require("prompt-sync")();
const alunos = []

const validarIndice = (indice) => indice >= 0 && indice < alunos.length;



const modelo = () => {
const nomeAluno = prompt("Nome do aluno: ")
const dataNascimento = parseInt(prompt("Ano de nascimento (AAAA): "), 10)
const curso = prompt("Descrição do curso: ")
const periodo = prompt("Qual o período: ")

if (nomeAluno !== "" &&
curso !=="" && 
periodo !== "" &&
!isNaN(dataNascimento) &&
dataNascimento < 2024 ){;
return {
nomeAluno,
dataNascimento,
curso,
periodo};
}else {
console.log("Dados inválidos");
return undefined;
}

}
const criar = () => {
const aluno = modelo();
if (aluno != undefined) {
alunos.push(aluno);
console.log("Aluno cadastrado com sucesso");
console.log(alunos);
}
};

    const listar = () => {
    if (alunos.length === 0) {
    console.log("Nenhum aluno encontrado ");
    return false;
    } else {
    alunos.forEach((aluno, indice) => {
    console.log(` ${indice + 1}
    Nome do Aluno: ${aluno.nomeAluno }
    Ano de Nascimento: ${aluno.dataNascimento }
    Curso: ${aluno.curso}
    Período: ${aluno.periodo}
    ` );
    });
    return true;
    }
    };
listar()

const atualizar = () => {

if (!listar()) {
return;
}
    
const indice = +prompt("Qual o indice que deseja atualizar? ") - 1;
    
const aluno = modelo(indice);

if (aluno != undefined && validarIndice(indice) && indice!="" )  { 
alunos[indice] = aluno;
console.log("Aluno atualizado com sucesso");
} else {
console.log("Falha na atualização");
}
}
;

const remover = () => {
    listar()
if (!listar()) {
return;
}
const indice = prompt("Qual indice você deseja remover? ") - 1;
if (validarIndice(indice)) {
alunos.splice(indice, 1);
console.log("Jogo removido com sucesso");
} else {
console.log("Falha na remoção");
}
};

const idade = () => {
for (let i = 0;  i < alunos.length; i++ ) {
if (alunos.dataNacimento > 2006) {
   console.log ("${alunos.dataNascimento} + Menor de idade.") 
} else {
   console.log("${alunos.dataNascimento} + Maior de idade.")
}
}
};

module.exports = {
criar,
atualizar,
listar,
remover,
idade
}
