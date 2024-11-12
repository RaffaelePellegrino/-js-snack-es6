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


document.getElementById("snack1").innerText = `L'oggetto più pesante è: ${max.nome}`

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
const squadra1={
    nome : "juve",
    falli: 0,
    score: 0,
}

const squadra2={
    nome : "napoli",
    falli: 0,
    score: 0,
}

const squadra3={
    nome : "udinese",
    falli: 0,
    score: 0,
}

const squadre = [squadra1,squadra2,squadra3];
const risultati = [];
for(let i = 0; i < squadre.length; i++){
    squadre[i].score = getRandomInt(0,5);
    squadre[i].falli = getRandomInt(0,1000);
    const risultatoSquadra = {
        nome: squadre[i].nome,
        falli: squadre[i].falli
    };
    risultati.push(risultatoSquadra)
}
const container = document.getElementById("container");

for(let i = 0; i < squadre.length; i++) {
    const squadraInfo = document.createElement("p");
    squadraInfo.textContent=`Squadra: ${squadre[i].nome}, Score: ${squadre[i].score}, Falli: ${squadre[i].falli}`;
    container.appendChild(squadraInfo)

    const risultatoInfo = document.createElement("p");
    risultatoInfo.textContent = `Risultato - Nome: ${risultati[i].nome}, Falli: ${risultati[i].falli}`;
    container.appendChild(risultatoInfo);
}
