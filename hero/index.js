const heros = require("./hero.json");

const getProperty = (hero, property) => hero[property];
//getProps
const getLevel = hero => getProperty(hero, "level");
const getNetworth = hero => getProperty(hero, "networth");
const getAssist = hero => getProperty(hero, "assist");
const getKillDeathRate = hero => hero.kill / hero.death;

//For use getPropsFunc to find the sum
const calSumOfProperty = (heros, getPropFunc) => {
  return heros.reduce(
    (sumOfNetworth, hero) => sumOfNetworth + getPropFunc(hero),
    0
  );
};
//just cal the average
const calAverage = (sum, n) => sum / n;

//filter heros from primary attribute
const filerHeroByAttribute = (heros, attribute) =>
  heros.filter(hero => hero.primary_attribute === attribute);

//Use get Props to find min and max of a property from all heros
const findMaxOfProperty = (heros, getPropFunc) =>
  heros.reduce(
    (hero1, hero2) => (getPropFunc(hero1) > getPropFunc(hero2) ? hero1 : hero2)
  );

const findMinOfProperty = (heros, getPropFunc) =>
  heros.reduce(
    (hero1, hero2) => (getPropFunc(hero1) < getPropFunc(hero2) ? hero1 : hero2)
  );

//Misson
const findAverageOfNetworth = heros =>
  calAverage(calSumOfProperty(heros, getNetworth), heros.length);

const findAverageLevelOfIntHero = heros => {
  const intHeros = filerHeroByAttribute(heros, "intelligent");
  return calAverage(calSumOfProperty(intHeros, getLevel), intHeros.length);
};

const findTheMostAssistHero = heros => findMaxOfProperty(heros, getAssist);

const findTheWorstKillDeathRateHero = heros =>
  findMinOfProperty(heros, getKillDeathRate);

console.log(findAverageOfNetworth(heros));
console.log(findAverageLevelOfIntHero(heros));
console.log(findTheMostAssistHero(heros));
console.log(findTheWorstKillDeathRateHero(heros));
