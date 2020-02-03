const Simulation = require('../Simulation.js')


describe('pandemic', () => {
  it('starts out with a bunch of uninfected people', () => {
    Simulation.initialisePopulation();
    const people = Simulation.getPeople();
    expect(people.length).toEqual(10);
    expect(Simulation.infectedCount()).toEqual(0);

  });

  it('infects a single person', () => {
    Simulation.initialisePopulation();
    Simulation.introduceDisease();
    const people = Simulation.getPeople();
    expect(people.length).toEqual(10);
    expect(Simulation.infectedCount()).toEqual(1);
  });

  it('spreads the infection if an infected person interacts with an uninfected person', () => {
    Simulation.initialisePopulation();
    Simulation.introduceDisease();
    Simulation.interact(0, 1);
    const people = Simulation.getPeople();
    expect(people.length).toEqual(10);
    expect(Simulation.infectedCount()).toEqual(2);
  });

  it('does not spreads the infection if two uninfected people interact', () => {
    Simulation.initialisePopulation();
    Simulation.introduceDisease();
    Simulation.interact(1, 2);
    const people = Simulation.getPeople();
    expect(people.length).toEqual(10);
    expect(Simulation.infectedCount()).toEqual(1);
  });
})
