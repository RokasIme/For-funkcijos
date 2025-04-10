/* 
Parašyti funkciją, kuri apskaičiuotų kiek sveikųjų teigiamų skaičių sąraše yra tam tikrų skaičių ir išvestų resultatą grafiškai. PVZ: turint sąrašą [1, 1, 2, 3, 3, 3, 4] rezultatas būtų gaunamas toks: 
*/

const data_1 = [1, 1, 2, 3, 3, 3, 4];
const data_2 = [3, 7, 8, 8, 6, 3, 7];

/* const obj = {
    1: 2,
    2: 1,
    3: 3,
    4: 1,
}; */

const printData = (arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    // Tikriname ar egzistuoja objekte key?
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  //   ciklas per objektą
  Object.keys(obj).map((key) => {
    console.log(`${key}: ${"*".repeat(obj[key])}`);
  });
};

printData(data_1);
console.log("________");
printData(data_2);
