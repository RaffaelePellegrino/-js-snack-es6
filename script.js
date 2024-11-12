"use strict";

const casa = {
    nome: "Mauro",
    peso: 50,
}

const ciao = {
    nome: "Arturo",
    peso: 140,
}

const bici = {
    nome: "Paolo",
    peso: 150,
}

const moto = {
    nome: "Gino",
    peso: 60,
}
const array= [casa,ciao,bici,moto];

let max = array[0];


for(let i=1; i < array.length; i++){
    if(array[i].peso > max.peso){

        max = array[i];
    }
}


document.getElementById("message").innerText = `L'oggetto più pesante è: ${max.nome}`
