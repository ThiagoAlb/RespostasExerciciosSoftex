//Ativar o módulo que permite fazer perguntas pelo terminal.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


//Fazendo uma pergunta ao usuário
rl.question("É terrestre? ", function(eTerrestre) {

    rl.question("Usa capacete? ", function(usaCapacete) {
        if (usaCapacete === "Sim") {
            console.log("O transporte escolhido é uma moto.");
            // Fechando a interface após obter a resposta
            rl.close();
        } else {
            rl.question("Cabe apenas uma pessoa? ", function(quantPessoas) {
                if(quantPessoas === "Sim") {
                    rl.question("É pesado? ", function(ePesado) {
                        if(ePesado === "Sim") {
                            console.log("O transporte escolhido é um trator.");
                            // Fechando a interface após obter a resposta
                            rl.close();
                        } else {
                            rl.question("Tem pedal? ", function(temPedal) {
                                if(temPedal === "Sim") {
                                    console.log("O transporte escolhido é uma bicicleta.");
                                    // Fechando a interface após obter a resposta
                                    rl.close();
                                } else {
                                    console.log("Veículo não cadastrado.");
                                    // Fechando a interface após obter a resposta
                                    rl.close();
                                }
                            });
                        }   
                    });
                } else {
                    console.log("Seu veículo não está cadastrado!");
                    // Fechando a interface após obter a resposta
                    rl.close();
                }   
            });
        }
    });
});