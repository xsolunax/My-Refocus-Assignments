var weightInKG = 80;
var heightInM = 1.80;
var heightSquared = heightInM*heightInM;

var myCalc = {
    calculateBMI: function(weight,height2){
        return Math.round((weight/height2)*100)/100
    }
};

console.log(`Your weight is ${weightInKG}kg. Your height is ${heightInM}m. Your BMI is ${Math.round(myCalc.calculateBMI(weightInKG,heightSquared)*100)/100}`)

module.exports = myCalc;