const prompt = require("prompt-sync")();
const { criar, atualizar, listar, remover, idade } = require("./modulo.js");

while (true) {
console.log(`
        1. Para criar jogo
        2. Para listar
        3. Para atualizar
        4. Para remover
        5. Para calcular a idade
        6. Para sair
        `);

const opcao = parseInt(prompt("Escolha uma opção acima: "));

switch (opcao) {
 case 1:
criar()
break;
 case 2:
listar()
break;
 case 3:
atualizar()
break; 
 case 4:
remover()
break;
 case 5:
idade()
break;
case 6:
process.exit()
break;
default:
console.log("Opção inválida")
break;
  }
}