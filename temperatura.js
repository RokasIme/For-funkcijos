/* 
Susikurkite 7 sąrašus, kuriose yra talpinamos skirtingų dienų temperatūros vertės
a. Parašykite funkciją, kuri apskaičiuotų norimos dienos vidutinę temperatūrą.
b. Parašykite funkciją, kuri apskaičiuotų norimos dienos aukščiausią temperatūrą.
c. Parašykite funkciją, kuri apskaičiuotų norimos dienos žemiausią temperatūrą.
d. Parašykite funkciją, kuriai davus visas savaitės dienas, ji suranda kurią dieną buvo žemiausia temperatūra, ir kurią dieną buvo aukščiausia temperatūra
e. Parašykite funkciją, kuri apskaičiuotų visos savaitės vidutinę temperatūrą
f. Parašykite funkciją, kuriai nurodžius vieną savaitės dieną ir tos dienos numatomą kritulių kiekį (saulėta (nelis) / debesuota (lis)), funkcija praneštų kaip siūloma pasiruošti einant į lauką: Pasitepti saulės kremu (jei saulėta ir šilta), Pasiimti skėtį (jei debesuota ir nešalta), Užsidėti striukę (Jei šalta), ir pasiimti morką besmegeniui lipdyti (Jei šalta ir debesuota). Jei pasiūlymų nėra, praneškite kad šiandienos oras eiti į lauką yra puikus. Kokia temperatūra yra šilta/nešalta/šalta įsivardinkite patys skaičiais. Šalta turėtų būti bent 0 laipsnių kad kristų sniegas
*/

const wd1 = [8.2, 16.2, 13.7, 18.9];
const wd2 = [7.1, 12.2, 14.3, 15.4];
const wd3 = [6.5, 10.2, 12.3, 14.4];
const wd4 = [5.9, 9.2, 11.3, 13.4];
const wd5 = [4.8, 8.2, 10.3, 12.4];
const wd6 = [3.7, 7.1, 9.2, 11.3];
const wd7 = [2.6, 6.0, 8.1, 10.2];

const week = [wd1, wd2, wd3, wd4, wd5, wd6, wd7];

const avgTemp = (data) =>
  (data.reduce((acc, value) => acc + value, 0) / data.length).toFixed(2);

const avgWeekTemp1 = (data) => avgTemp(...data);
console.log(avgWeekTemp1(week));

const avgWeekTemp2 = (data) => {
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    sum += +avgTemp(data[i]);
  }
  return (sum / data.length).toFixed(2);
};
console.log(avgWeekTemp2(week));

const highestTemp = (data) => Math.max(...data);
console.log(highestTemp(wd1));

const lowestTemp = (data) => Math.min(...data);
console.log(lowestTemp(wd1));

const lowestHighest = (data) => {
  const temp = [];
  let lowestTempValue = Infinity;
  let highestTempValue = -Infinity;
  let lowestDay;
  let highestDay;

  for (let i = 0; i < data.length; i++) {
    const lowest = lowestTemp(data[i]);
    const highest = highestTemp(data[i]);
    temp.push([lowest, highest]);
    if (lowest < lowestTempValue) {
      lowestTempValue = lowest;
      lowestDay = 1;
    }
    if (highest > highestTempValue) {
      highestTempValue = highest;
      highestDay = 1;
    }
  }

  const weekdays = [
    "Pirmadienis",
    "Antradienis",
    "Trečiadienis",
    "Ketvirtadienis",
    "Penktadienis",
    "Šeštadienis",
    "Sekmadienis",
  ];
  return `Žemiausia temperatūra buvo ${weekdays[lowestDay]}: ${lowestTempValue}\nAukščiausia temperatūra buvo ${weekdays[highestDay]}: ${highestTempValue}`;
};
console.log(lowestHighest(week));

const suggestion = (data, precipitation) => {
  const avg = +avgTemp(data);

  let comfort = "";
  if (avg >= 15) {
    comfort = "warm";
  } else if (avg >= 10) {
    comfort = "not-cold";
  } else {
    comfort = "cold";
  }
  let result = ` Today is ${comfort}. ${precipitation ? "Sunny" : "Claudy"}.`;

  switch (true) {
    case precipitation && comfort === "warm":
      result += "Pasitepti saulės kremu";
      break;
    case !precipitation && comfort === "not cold":
      result += "Pasiimti skėtį";
      break;
    case !precipitation && comfort === "cold":
      result += "Užsidėti striukę ir pasiimti morką besmegeniui lipdyti";
      break;
    case precipitation && comfort === "cold":
      result += "Užsidėti striukę";
      break;
    default:
      result += "Šiandien oras eiti į lauką yra puikus";
      break;
  }
  return result;
};

console.log(suggestion(wd1, true));
console.log(suggestion(wd2, false));
console.log(suggestion(wd6, false));
