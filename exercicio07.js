//Ativar o módulo que permite fazer perguntas pelo terminal.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


//Fazendo uma pergunta ao usuário
rl.question("Qual número você deseja criar a tabuada? ", function(numero) {
   //Encerrando a interface de pergunta 
  rl.close();
    //Transformando a string de entrada em um número inteiro. 
    let num = parseInt(numero);
    console.log(`Tabuada do ${num}:`);
    //Laço de repetição que vai gerar a tabuada até que a condição estabelecida seja satisfeita
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
});