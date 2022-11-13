var weightInKG = 80;
var heightInM = 1.80;
var heightSquared = heightInM*heightInM;

function calculateBMI(weight,height2){
    return (weight/height2)
}

console.log(`Your weight is ${weightInKG}. Your height is ${heightInM}. Your BMI is ${Math.round(calculateBMI(weightInKG,heightSquared)*100)/100}`)

function test(){
    const result = calculateBMI(weightInKG,heightSquared)
    const expected = 24.691358024691358
    
    console.assert(
        expected === result,
        `Check BMI fails - Expects ${expected} Received ${result}`
    )
}

test()