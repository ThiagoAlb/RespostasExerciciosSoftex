const pergunta = require("readline-sync");

let nome =pergunta.question("Digite seu nome: ");
let endereco = pergunta.question("Digite seu endereço: ");
let cidade = pergunta.question("Digite sua cidade: ");
let cpf = pergunta.questionInt("Digite seu CPF: ");
let rg = pergunta.questionInt("Digite seu RG: ");
let idade = pergunta.questionInt("Qual a sua idade? ");
let nomeDoPai = pergunta.question("Qual o nome do seu pai?");
let nomeDaMae = pergunta.question("Qual o nome da sua mãe? ");
let peso = pergunta.questionFloat("Digite seu peso: ");
let rendaBruta = pergunta.questionFloat("Forneça sua renda bruta: ");

console.log(`Nome: ${nome}`);
console.log(`Endereço: ${endereco}`);
console.log(`Cidade: ${cidade}`);
console.log(`CPF: ${cpf}`);
console.log(`RG: ${rg}`);
console.log(`Idade: ${idade}`);
console.log(`Nome do pai: ${nomeDoPai}`);
console.log(`Nome do mãe: ${nomeDaMae}`);
console.log(`Peso: ${peso}Kg`);
console.log(`Renda Bruta: R$${rendaBruta}`);


