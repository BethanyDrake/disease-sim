import random
import matplotlib.pyplot as plt
import math
def initialisePopulation(populationSize = 10):
  people = []
  for x in range(populationSize):
    people.append({'isInfected': False})
  return people

people = initialisePopulation()

def introduceDisease(people):
  people[0]["isInfected"] = True;
  return;


introduceDisease(people)


def interact(people, i1, i2):
  if (people[i1]["isInfected"] or people[i2]["isInfected"]):
    people[i1]["isInfected"] = True;
    people[i2]["isInfected"] = True;

interact(people, 0, 1)
interact(people, 2, 3)
interact(people, 3, 1)



def infectedCount(people):
  return len((filter(lambda person: person["isInfected"], people)))



def run(populationSize = 10):
  maxInteractions = populationSize * 100
  interactions = 0
  people = initialisePopulation(populationSize)

  infectedPerDay = []
  introduceDisease(people)
  while(infectedCount(people) < populationSize and interactions < maxInteractions):
    p1 = random.randrange(populationSize)
    p2 = random.randrange(populationSize)
    interact(people, p1, p2)
    infectedPerDay.append(infectedCount(people))
    interactions += 1

  return infectedPerDay

populationSize = 2000
trials = 1
for i in range(trials):
    infectedPerDay = run(populationSize)
    plt.plot(infectedPerDay, color='blue', linewidth=0.5)

totalDays = len(infectedPerDay)
linearModel = map(lambda x: x*populationSize/totalDays, range(totalDays))

k = 1.0 * populationSize
r = (2.0 / populationSize)
totalDays = 10* populationSize

def logisticGrowFunction(t, K, r):
    withP0 = (k - 1) / 1

    return K /(1 + withP0  * math.pow(math.e, -r*t))


logisticGrowModel = map(lambda x: logisticGrowFunction(x, k, r), range(totalDays))

model = logisticGrowModel
# plt.plot(model, color='red', linewidth=2)
plt.suptitle('N='+str(populationSize), fontsize=16)
plt.ylabel('number infected')
plt.xlabel('day')
plt.show()
