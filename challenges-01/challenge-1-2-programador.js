/*
================================
    EXERCICIO PROGRAMADOR
================================
*/

//Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
//Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

const objeto = {
    nome: "Carlos",
    idade: 25,
    propriedade: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
  };

console.log(`O usuário ${objeto.nome} tem ${objeto.idade} anos e usa a tecnologia ${objeto.propriedade[0].nome} com especialidade em ${objeto.propriedade[0].especialidade}`);

  
