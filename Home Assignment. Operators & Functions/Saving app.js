let alreadySaved = 7500;
let saveGoal = 10000;
let saveLeft = 100 - alreadySaved/saveGoal*100;

console.log(`Thank you for your discipline and hardwork, Sam! You are now ${saveLeft}% away from your goal of saving ₱${saveGoal.toLocaleString("en-US")}.`)