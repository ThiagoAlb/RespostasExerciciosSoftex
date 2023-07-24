const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let resp_eTerrestre;
let resp_usaCapacete;
let resp_quantPessoas;
let ePesado;
let temPedal;

rl.question("É terrestre? ", function(eTerrestre) {
    resp_eTerrestre = eTerrestre;

    rl.question("Usa capacete?", function(usaCapacete) {
        resp_usaCapacete = usaCapacete;
        if (usaCapacete === "Sim") {
            console.log("O transporte escolhido é uma moto.");
        } else {
            rl.question("Cabe apenas uma pessoa?", function(quantPessoas) {
                resp_quantPessoas = quantPessoas;
                if(quantPessoas === "Sim") {
                    rl.question(

                    )
                } else {

                }   
            })
        }
    })
})