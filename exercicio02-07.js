const pergunta = require('readline-sync');

function obterNomeCompleto() {
    const nomeCompleto = pergunta.question('Digite seu nome completo: ');
    return nomeCompleto
}

const infoNomeCompleto = obterNomeCompleto();

function obterAnoNascimento() {
    while(true) {
        const anoNascimento = pergunta.questionInt('Digite o ano do seu nascimento: ');

        if(isNaN(anoNascimento) || anoNascimento < 1922 || anoNascimento > 2021) {
            console.log("Ano de nascimento inválido. Por favor, digite um valor entre 1922 e 2021.");
        } else {
            return anoNascimento;
        }
    }
    
}

const infoAnoNascimento = obterAnoNascimento()

function calcularIdade() {
    const anoAtual = 2022;
    const idade = anoAtual - infoAnoNascimento;
    return `${infoNomeCompleto}, você completou ou completará ${idade} anos em ${anoAtual}.`;

}

console.log(calcularIdade());
