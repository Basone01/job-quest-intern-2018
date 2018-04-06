### TakeMeTour Internship Program 2018

Hi all applicants! Welcome to TakeMeTour Internship Program 2018. Being and intern at TakeMeTour is challenging so we have challenges for you! These challenges are designed to assess your learning skill, which is the fundamental and most important skill of great software developer. So I do not expect you to have full or any knowledge about the topic beforehand but it's your job to try to learn and answer those challenges.

## Algorithm in Javascript
Code must be writted in Javascript language. The code will be tested with Node8, so you can use all Javascript features that equivalent to Node8.

1. Write a function that shift the elements of array to left or right by n elements in infinity loop. the function recevice 3 parameters, 1st is an array, 2nd the is direction ('left' or 'right'), 3rd is the number of elements will be shifted. For example,
```
> shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
['sarah', 'alex', 'john', 'jane']

> shift([1, 2, 3, 4 ,5], 'right', 3)
[3, 4, 5, 1, 2]
```
Answer:
```js
const shift = (array = [], direction = "left", times = 1) => {
  const moddedTimes = times % array.length;
  let shiftedArray =
    direction === "left"
      ? [...array.slice(moddedTimes), ...array.slice(0, moddedTimes)]
      : [
          ...array.slice(array.length - moddedTimes, array.length),
          ...array.slice(0, array.length - moddedTimes)
        ];

  console.log(shiftedArray);
  return shiftedArray;
};
```

2. Download [hero.json](https://github.com/takemetour/job-quest-intern-2018/blob/master/hero.json) and write a code to caculate these values from **hero.json**
- 2.1 Average **networth** of all heroes
- 2.2 Average **level** for hero that has 'intelligent' as **primary_attribute**
- 2.3 Find the hero who got the most **assist**
- 2.4 Find the hero who got the worst **kill/death ratio** (ratio = kill/death)

Answer:
```
-- insert your answer here
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
```

## Simple Web Application: A joke from Chuck Norris.

This part of quest will be a challenging one. You are going to make a simple web application which allow users to get some joke from **Chuck Norris** himself.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

### Features
- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users has options to change number of result jokes, user's first name and last name
- UI Design as you wish.

### Technical description
- Using data from [REST API](http://www.icndb.com/api/)
- Any tools & framework is allowed.
- If you are using tools & framework which is same as our tech stack (React, Redux, styled-components, recompose etc.) will be a plus.
- Any extra feature will be a plus.

## Questions
Q1: What is GraphQL and how it is different from REST API?

A1: <insert your answer here>


Q2: Please explain how javascript benefits from cross-platform development

A2: <insert your answer here>

Q3: What do you expect to get from during an internship at TakeMeTour?

A3: <insert your answer here>

## Submitting

Please fork this repo and submit your repository at jet@takemetour.com along with your contact information.

Note: These challenges must be done by yourself. There is no benefit for both sides if the answer do not reflect your true skill.
