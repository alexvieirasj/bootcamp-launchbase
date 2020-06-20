/*
====================================
    EXERCICIO OPERAÇÕES BANCÁRIAS   
====================================
*/

//Crie um programa para realizar operações bancárias na conta de um usuário.

// Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit, 
// percorre as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo:

//Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário 
//independente do seu tipo:

// Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo credit/debit, o 
// retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0 //saldo
};

function createTransaction(transaction){

    user.transactions.push(transaction);

    let credito = 0;
    let debito = 0;
    for (let valor of user.transactions) {
       
        if(valor.type.indexOf("credit") > -1) {       
            credito += valor.value; 
        } else if(valor.type.indexOf("debit") > -1) {
            debito += valor.value; 
        } 
    }

    user.balance = credito - debito;
} 

function getHigherTransactionByType(operacao){

    let maior = 0;
    let maiorArray = [];
    for (let valor of user.transactions) {
       
        if(valor.type.indexOf(operacao) > -1) {       
           
            if(valor.value >= maior){
                maior = valor.value;
                maiorArray = valor;
            }

        } else if(valor.type.indexOf(operacao) > -1) {
            if(valor.value >= maior){
                maior = valor.value;
                maiorArray = valor;
            }
        } 
    }

    console.log(maiorArray);
}

function getAverageTransactionValue(){

    let media = 0;
    let valor = 0;
    const quantidade = user.transactions.length;

    for(let i=0; i < user.transactions.length; i++) {
        valor += user.transactions[i].value;
    }

    media = valor / quantidade;
    console.log(media);
}

function getTransactionsCount(){

    let contadorCredito = 0;
    let contadorDebito = 0;
    let arrayContadorOperacao = {
        credit: 0,
        debit: 0
    };

    for (let valor of user.transactions) {
       
        if(valor.type.indexOf("credit") > -1) {       
            contadorCredito++;
        } else if(valor.type.indexOf("debit") > -1) {
            contadorDebito++;
        } 
    }

    arrayContadorOperacao.credit = contadorCredito;
    arrayContadorOperacao.debit = contadorDebito;

    console.log(arrayContadorOperacao);
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }