let caloriesBurnedPerHour = 450;
let cyclingLength = 15;
let cyclingHoursPerDay = 0.5;
let totalHoursCycling = cyclingLength * cyclingHoursPerDay;
let totalCaloriesBurned = caloriesBurnedPerHour * totalHoursCycling;

console.log(`Great work, Sam! After ${cyclingHoursPerDay} hours of running every day for two weeks, you may lose a total of ${totalCaloriesBurned} calories.`)