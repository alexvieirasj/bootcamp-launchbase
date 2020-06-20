/*
================================
    CALCULO DE IMC
================================
*/

/*
    SE o IMC maior ou igual a 30: Carlos você está acima do peso;
    SE o IMC menor que 29.9: Carlos você não está acima do peso;
*/

const nome = "Carlos";
const peso = 97;
const altura = 1.80;

const imc = Math.round((peso / (altura * altura))*10)/10;

if(imc >= 30){
    console.log(`${nome} você está acima do peso`);
} else {
    console.log(`${nome} você não está acima do peso`);
}
