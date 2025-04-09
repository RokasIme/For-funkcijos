/* 
1. Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų atstumai iki Vilniaus ([‘Kaunas’, 89.6, ‘Klaipėda’, 307.3, … ).
a. Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x km/h greičiu per y valandų
*/

import { miestai } from "./miestuObjektas.js";

function toliausiaiPerYvalandu(x, y) {
  const mileage = x * y;
  let posibleCities = [];
  for (let i = 0; i < miestai.length; i++) {
    if (miestai[i].distance < mileage) {
      posibleCities.push(miestai[i]);
    }
    posibleCities.sort((a, b) => a.distance - b.distance);
  }
  return posibleCities[posibleCities.length - 1];
}
console.log("\n       Kur toliausiai");
console.log(toliausiaiPerYvalandu(100, 1.2));

/* b. Parašykite funkciją, kuri pasakytų, ar spėtume pasiekti norimą miestą per x valandų ir kokiu greičiu turėtume važiuoti? (padarykite limitą 120 km/h) */

function arSpesi(city, h) {
  const tinkamasMiestas = [];
  for (let i = 0; i < miestai.length; i++) {
    if (miestai[i].name === city) {
      tinkamasMiestas.push(miestai[i]);
    }
  }
  const speedToCity = (tinkamasMiestas[0].distance / h).toFixed(1);
  if (speedToCity <= 120) {
    return `Jei važiuotume ${speedToCity} km/h, ${city} pasiektume per ${h} h.`;
  } else {
    return `Nespėtume, greičio limitas 120km/h`;
  }
}

console.log("\n       Ar spėtume");
console.log(arSpesi("Telšiai", 2.5));
console.log(arSpesi("Kaunas", 0.8));

/* 
c. Parašykite funkciją, kuri nurodytų į kokį tolimiausią miestą mes galėtume nuvažiuoti su k kiekiu pinigų, jei už vieną litrą degalų turime mokėti j eurų. Kelionę pradedame su 30 litrų benzino bakelyje, už kuriuos mokėti nereikia. Nuvažiuodami vieną kilometrą sudeginame x kiekį degalų */

function toliausiaiUzPinigus(pinigu, kaina, vartoja) {
  const fuelLiters = pinigu / kaina + 30;
  const distanceFuel = (fuelLiters / vartoja) * 100;

  let posibleCities1 = [];
  for (let i = 0; i < miestai.length; i++) {
    if (miestai[i].distance < distanceFuel) {
      posibleCities1.push(miestai[i]);
    }
    posibleCities1.sort((a, b) => a.distance - b.distance);
  }
  return posibleCities1[posibleCities1.length - 1];
}

console.log("\n      Kuras už pinigus, kur toliausia?");
console.log(toliausiaiUzPinigus(10, 2, 15));

/*
d. Susikurkite sąrašą kelio sąlygoms iki kiekvieno miesto apibūdinti (pavyzdžiui: geras, prastas, taisomas). Geromis kelio sąlygomis iki miesto važiuojame paprastai, prastomis kelio sąlygomis iki miesto važiuojame 1.5 karto ilgiau, o taisomo kelio sąlygomis važiuojame 2 kartus ilgiau. Parašykite funkciją, kuri pagal kelio sąlygas, nurodytą greitį ir duotus atstumus, parašytų kiek laiko tektų važiuoti iki kiekvieno miesto.
Užduotį gaima padaryti ir su objektais. Tuomet galite nekurti sąrašų
*/

function kelioSalygos(greitis) {}

console.log("\n      Kelio sąlygos, kiek užtruksime");
