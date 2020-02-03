# Algorithm
Setup:

 - Start with N people, including one who is 'infected
 - Each 'day' (timestep) chose two random people to interact
    - If one person is infected, the infection spreads to the other person




# Hypotheses
The growth will follow [Logistic Growth](https://en.wikipedia.org/wiki/Logistic_function)

# Background
In ecology, populations growth is modelled by the equation:

![logistic growth equation](./logistic-growth-equation.png)

Where:
  - t is time (in our case measured in days)
  - K is maximum population (in our case, this is the maximum number of infected people, so K=N)
  - r is growth rate (see below for more discussion)
  - S is starting population (in our case, S=1)

## Growth Rate (r)

From the ~~wikipedia page~~ rigorous research, it's unclear what exactly r represents, and what the the number would be in this case.
