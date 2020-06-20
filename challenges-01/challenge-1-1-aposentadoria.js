/*
================================
    CALCULO DE APOSENTADORIA
================================
*/

/*
    O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
    Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, 
    enquanto a mulher precisa ter no mínimo 85 anos na soma;

    SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
    SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
*/


const nome = "Silvana";
const sexo = "F";
const idade = 58;
const contribuicao = 30;

const tempoContribuicao = idade + contribuicao;

if( (contribuicao >= 30 && sexo == "F" && idade >= 55)  ||  (contribuicao >= 35 && sexo == "M" && idade >= 60) ) {

    if( (sexo == "F" && tempoContribuicao >= 85) || (sexo == "M" && tempoContribuicao >= 95) ){
        console.log(`${nome}, você pode se aposentar!`);
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`);
    }
} else {
    console.log(`Sexo, idade ou tempo de contribuição inválidos!`);
}