
let people;
const initialisePopulation = (populationSize = 10) => {
  people = [];
  for (let i =0; i< populationSize; i++) {
    people.push({});
  }
}

const getPeople = () => {
  return people;
}

const introduceDisease = () => {
  people[0].isInfected = true;
  return;
}

const interact = (i1, i2) => {
  if (people[i1].isInfected || people[i2].isInfected) {
    people[i1].isInfected = true;
    people[i2].isInfected = true;
  }
}

const infectedCount = () => {
  return people.filter(person => person.isInfected).length
}

const run = () => {
  const randomInt = max => {
    return Math.floor(Math.random() * max);
  }

  const maxInteractions = 10000;
  let interactions = 0;
  initialisePopulation(30);

  introduceDisease();
  while(infectedCount() < people.length && interactions < maxInteractions) {
    const p1 = randomInt(people.length);
    const p2 = randomInt(people.length);
    interact(p1, p2);
    console.log(infectedCount());
    interactions++;
  }
}


exports.initialisePopulation = initialisePopulation;
exports.getPeople = getPeople;
exports.introduceDisease = introduceDisease;
exports.interact = interact;
exports.infectedCount = infectedCount;

exports.run = run;
