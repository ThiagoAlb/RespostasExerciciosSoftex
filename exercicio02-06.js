const pergunta = require('readline-sync');

function somar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if(num2 !== 0) {
        return num1 / num2;
    } else {
        return 'Erro: Divisão por zero'
    }
}


function calculadora() {
    while(true) {
        console.log('Escolha uma operação matemática: ');
        console.log('1: Soma');
        console.log('2: Subtração');
        console.log('3: Multiplicação');
        console.log('4: Divisão');
        console.log('0: Sair');
        console.log();

        let operacao = pergunta.questionInt('Digite o número da operação matemática que deseja realizar: ')
        
        if(operacao == 0) {
            console.log('----- Saindo da calculadora -----');
            break;
        } else if(operacao >= 1 && operacao <=4) {
            let num1 = pergunta.questionInt('Digite o primeiro número: ');
            let num2 = pergunta.questionInt('Digite o segundo número: ');

            let resultado;

            switch(operacao) {
                case 1:
                    resultado = somar(num1,num2);
                    break;
                case 2:
                    resultado = subtrair(num1,num2);
                    break;
                case 3:
                    resultado = multiplicar(num1,num2);
                    break;
                case 4:
                    resultado = dividir(num1,num2);
                    break;
            }
            console.log('')
            console.log(`##### RESULTADO: ${resultado} #####`);
            console.log('')

        } else {
            console.log(' ##### Essa opção não existe. #####');
        }
    }
}

calculadora();


