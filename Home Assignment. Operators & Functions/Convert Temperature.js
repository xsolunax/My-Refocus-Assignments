function convertCelsiusToKelvin(tempCelsius){
    let tempKelvin = (tempCelsius + 273.15) + "K";
    return tempKelvin;
}
function convertFarenheitToKelvin(tempFarenheit){
    let tempKelvin = ((tempFarenheit-32) * (5/9) + 273.15) + "K";
    return tempKelvin;
}

console.log(convertCelsiusToKelvin(25));
console.log(convertFarenheitToKelvin(100));