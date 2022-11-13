const mycalc = require('./bmi-calculator')

test("Check if BMI calculator is calculating height and weight correctly", () =>{
    const weightInKG = 80;
    const heightInM = 1.80;
    var heightSquared = heightInM*heightInM;
    expect(mycalc.calculateBMI(weightInKG,heightSquared)).toBe(24.69);
})