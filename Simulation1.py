import random

print ('hello?')
def initialisePopulation(populationSize = 10):
  people = []
  for x in range(populationSize):
    people.append({'isInfected': False})
  return people

people = initialisePopulation()
print(people)



def introduceDisease(people):
  people[0]["isInfected"] = True;
  return;


introduceDisease(people)
print(people)


def interact(people, i1, i2):
  if (people[i1]["isInfected"] or people[i2]["isInfected"]):
    people[i1]["isInfected"] = True;
    people[i2]["isInfected"] = True;

interact(people, 0, 1)
interact(people, 2, 3)
interact(people, 3, 1)

print(people)


def infectedCount(people):
  return len((filter(lambda person: person["isInfected"], people)))


print(infectedCount(people))

def run():
  maxInteractions = 10000
  interactions = 0
  populationSize = 30
  people = initialisePopulation(populationSize)

  introduceDisease(people)
  while(infectedCount(people) < populationSize and interactions < maxInteractions):
    p1 = random.randrange(populationSize)
    p2 = random.randrange(populationSize)
    interact(people, p1, p2)
    print(infectedCount(people))
    interactions += 1

print('***************')
run()
print('***************')
