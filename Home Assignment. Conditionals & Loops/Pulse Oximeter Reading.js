var oxygenSaturation = 95;
var pulseRate = 100;

function checkOximeter(oxygenSaturation, pulseRate){
    if (oxygenSaturation >= 96){
        console.log('The pulse oximeter has normal reading.');
    }
    else if (oxygenSaturation == 95){
        console.log('Your oxygen saturation is acceptable, and you can continue home monitoring.')
    }
    else if (oxygenSaturation >= 93 && oxygenSaturation <= 94){
        console.log('Your oxygen saturation is lower than normal, seek advice from health professionals.')
    }
    else if (oxygenSaturation <= 92){
        console.log('Your oxygen saturation is too low, seek urgent medical advice.')
    }

    
    if (pulseRate >= 40 && pulseRate  <= 100){
        console.log('The pulse oximeter has normal reading.');
    }
    else if (pulseRate >= 101 && pulseRate  <= 109){
        console.log('Your pulse rate is acceptable, and you can continue home monitoring.')
    }
    else if (pulseRate >= 110 && pulseRate  <= 130){
        console.log('Your pulse rate is higher than normal, seek advice from health professionals.')
    }
    else if (pulseRate >= 131){
        console.log('Your pulse rate is too high, seek urgent medical advice.')
    }
}

checkOximeter(oxygenSaturation, pulseRate)