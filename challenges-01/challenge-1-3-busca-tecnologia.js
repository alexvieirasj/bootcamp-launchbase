/*
==================================
    EXERCICIO BUSCA TECNOLOGIA
==================================
*/

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

// Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
// SE encontrar, retorne true da função, caso contrário retorne false

function checaSeUsuarioUsaCSS(usuario) {

    if(usuario.tecnologias.indexOf("CSS") > -1) {
        return true;
    } else {
        return false;
    }
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}