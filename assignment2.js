/*
You are planning a cross-country road trip!
- The distance of the trip, in total, is 1,500 miles.
- Your car’s fuel efficiency is as follows:
    - At 55 miles per hour, you get 30 miles per gallon.
    - At 60 miles per hour, you get 28 miles per gallon.
    - At 75 miles per hour, you get 23 miles per gallon.
- You have a fuel budget of $175.
- The average cost of fuel is $3 per gallon.

Set up a program to answer the following questions:

- How many gallons of fuel will you need for the entire trip?
- Will your budget be enough to cover the fuel expense?
- How long will the trip take, in hours?

Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for 
the trip?
Log the results of your calculations using string concatenation or template literals.

*/


const totalDistance = 1500; 
const fuelBudget = 175; 
const averageFuelPricePerMile = 3;  

const slowSpeed = 55;
const okSpeed = 60;
const fastSpeed = 75;

const efficiencyForSlow = 30;
const efficiencyForOK = 28;
const efficiencyForFast = 23;

const gallonsUsedForSlow = totalDistance / efficiencyForSlow;
console.log('fuel needed for slow driver = ' + gallonsUsedForSlow + ' gallons');
const gallonsUsedForOK = totalDistance / efficiencyForOK;
console.log('fuel needed for OK driver = ' + gallonsUsedForOK + ' gallons');
const gallonsUsedFarFast = totalDistance / efficiencyForFast;
console.log('fuel needed for Fast driver = ' + gallonsUsedFarFast + ' gallons');

console.log('=================================================================');

const costForSlow = gallonsUsedForSlow * averageFuelPricePerMile;
console.log('Trip cost for slow driver = ' + costForSlow + ' $'); 
const costForOK = gallonsUsedForOK * averageFuelPricePerMile;
console.log('Trip cost for OK driver = ' + costForOK + ' $');
const costForFast = gallonsUsedFarFast * averageFuelPricePerMile;
console.log('Trip cost for Fast driver = ' + costForFast + ' $');

console.log('=================================================================');

const timeForSlow = totalDistance / slowSpeed;
console.log('Time takes for slow driver = ' + timeForSlow + ' hours');
const timeForOK = totalDistance / okSpeed;
console.log('Time takes for OK driver = ' + timeForOK + ' hours');
const timeForFast = totalDistance / fastSpeed;
console.log('Time takes for Fast driver = ' + timeForFast + ' hours');

console.log('=================================================================');
// The ternary operator is like an if-else statement, condition ? value true : value false;
const enoughBudgetForSlow = costForSlow <= fuelBudget ? "enough" : "not enough";
console.log('Is budget enough for slow driver = ' + enoughBudgetForSlow);
const enoughBudgetForOK = costForOK <= fuelBudget ? "enough" : "not enough";
console.log('Is budget enough for ok driver = ' + enoughBudgetForOK);
const enoughBudgetForFast = costForFast <= fuelBudget ? "enough" : "not enough";
console.log('Is budget enough for fast driver = ' + enoughBudgetForFast);

console.log('=================================================================');

if (enoughBudgetForSlow === "enough" && (costForSlow < costForOK && costForSlow < costForFast)) {
    console.log('55 MPH is best option');
  } else if (enoughBudget2 === "Yes" && (costForOK < costForSlow && costForOK < costForFast)) {
    console.log('60 MPH is best option');
  } else if (enoughBudget3 === "Yes" && (costForFast < costForSlow && costForFast < costForOK)) {
    console.log('75 MPH is best option');
  }



