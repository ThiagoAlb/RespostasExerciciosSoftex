function criarNo (nome, idade) {
    return {
        nome: nome,
        idade: idade,
        filho: null,
        proximo: null
    };
}

function adicionarNo (lista, nome, idade) {
    const novoNo = criarNo(nome, idade);

    if (!lista) {
        return novoNo;
    }

    let atual = lista;
    while (atual.proximo) {
        atual = atual.proximo;
    }
    atual.proximo = novoNo;
    return lista;
}

function imprimirLista (lista) {
    let atual = lista;
    while (atual) {
        console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
        if (atual.filho) {
            console.log(`Filho: ${atual.filho.nome}`);
        }
        console.log('---');
        atual = atual.proximo;
    }
}

let lista = null;
lista = adicionarNo(lista, 'João', 30);
lista = adicionarNo(lista, 'Maria', 45);
lista = adicionarNo(lista, 'Alex', 20);

lista.proximo.filho = lista.proximo.proximo;

imprimirLista(lista);