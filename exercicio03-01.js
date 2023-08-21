//Lista/Array para guardar nomes de dez pessoas:
const nomes = ['Thiago', 'João', 'Maria','José', 'Alessandra', 'Henrique', 'Ana', 'Pedro', 'Guilherme', 'Bianca'];

//Lista/Array para guardar idades das pessoas:
const idades = [30,20,28,35,18,22,29,35,40,33];

//Lista/Array para guardar as cores favoritas:
const cores = ['Preto', 'Azul', 'Amarelo', 'Vermelho', 'Verde', 'Roxo', 'Laranja', 'Cinza', 'Branco', 'Rosa'];

//Imprimindo as listas
function imprimirInformacoes() {
    console.log(`Nomes: ${nomes}`);
    console.log(`Idades: ${idades}`);
    console.log(`Cores favoritas: ${cores}`);
    console.log('\n');
}

//Impressão das informações iniciais: 
console.log('######  Informações iniciais:  ######');
imprimirInformacoes();

//Alterações:
idades.splice(1,1,60);
cores.splice(9,1,'Marrom');

//Impressão das informações após alteração:
console.log('######  Informações finais:  ######');
imprimirInformacoes()


