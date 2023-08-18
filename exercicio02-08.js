let pergunta = require('readline-sync');

let candidatoX = 889;
let candidatoY = 847;
let candidatoZ = 515;
let votosBranco = 0;
let votosNulos = 0;

function votar() {
    console.log('Candidato X: digite 1');
    console.log('Candidato Y: digite 2');
    console.log('Candidato Z: digite 3');
    console.log('Branco: digite 0');
    console.log('Nulo: qualquer número diferente desses acima.');
    const voto = pergunta.questionInt('Digite o número do candidato: ');
    
    /*
    if(voto === 1) {
        candidatoX++;
    } else if(voto === 2) {
        candidatoY++;
    } else if(voto === 3) {
        candidatoZ++;
    } else if(voto === 0) {
        votosNulos++
    } else if() {
        
    }

*/


    switch(voto) {
        case 1:
            candidatoX++;
            break;
        case 2:
            candidatoY++;
            break;
        case 3:
            candidatoZ++;
            break;
        case 0:
            votosNulos++;
            break;
        default:
            votosNulos++;
    }
}

function exibirResultado() {
    console.log('Resultado da eleição 2023: ');
    console.log(`Candidato X: ${candidatoX} votos`);
    console.log(`Candidato Y: ${candidatoY} votos`);
    console.log(`Candidato Z: ${candidatoZ} votos`);
    console.log(`Votos em branco: ${votosBranco}`);
    console.log(`Votos nulos: ${votosNulos}`);

    let vencedor = '';
    //Math.max procura o maior valor entre os valores passados como argumentos
    let maisVotos = Math.max(candidatoX, candidatoY, candidatoZ);
    if(maisVotos === candidatoX) {
        vencedor = 'Candidato X';
    } else if(maisVotos === candidatoY) {
        vencedor = 'Candidato Y';
    } else if(maisVotos === candidatoZ) {
        vencedor = 'Candidato Z';
    }

    console.log(`Vencedor: ${vencedor}`);
}


//Iniciar votação
let finalizar = false;
while(!finalizar) {
    votar();
    let resposta = pergunta.question('Deseja finalizar a votação? (S/N) ').toLocaleUpperCase();
    if(resposta === 'S') {
        finalizar = true;
    } else {
        while(resposta === 'N') {
            resposta = pergunta.question('Deseja finalizar a votação? (S/N) ').toLocaleUpperCase();
            if(resposta === 'S') {
                finalizar = true;
            }
        }
        
    }
}

exibirResultado();