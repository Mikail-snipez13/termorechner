const Energy = [
    "kcal",
    "J", 
    "Ws", 
    "Wh",
    "kWh",
    "VAs", 
    "Nm"
]

const Measure = [
    "Fuß", 
    "Zoll", 
    "Meilen",
    "Kilometer",
    "Meter",
    "Zentimeter",
    "Millimeter"
]

const Mass = [
    "Pfund",
    "Unze",
    "Tonne",
    "Kilogramm",
    "Gramm"
]

const Temp = [
    "Kelvin",
    "Celsius",
    "Fahrenheit"
]

// für die Umrechnung von Energiewerten
function energieUmrechnen() {
    var start = document.getElementById('energy-start').value;
    var target = document.getElementById('energy-target').value;
    var number = document.getElementById('energy-number').value;
    const kcal = 4.184;
    // console.log(start + " : " + target + " : " + number);

    if (Energy.includes(start) && Energy.includes(target) && number != "" && start != target) {
        hideError('einheiten-00');
        let element = document.getElementById('energy-value');
        
        switch (start) {
            case "kcal": 
                if (["J", "Ws", "VAs", "Nm"].includes(target)) {
                    element.innerHTML = format(number * kcal) + target;
                }
                else if ("Wh" == target) {
                    element.innerHTML = format((number * kcal)/3600) + target;
                }
                else if ("kWh" == target) {
                    element.innerHTML = format((number * kcal)/3600000) + target; 
                }
                else {
                    showError('einheiten-00');
                }
            break;
            
            case "J":
                if (["Ws", "VAs", "Nm"].includes(target)) {
                    element.innerHTML = number + target;
                }
                else if ("Wh" == target) {
                    element.innerHTML = format((number)/3600) + target;
                }
                else if ("kWh" == target) {
                    element.innerHTML = format((number)/3600000) + target; 
                }
                else if ("kcal" == target) {
                    element.innerHTML = format(number / kcal) + target;
                }
                else {
                    showError('einheiten-00');
                }
            break;
                
            case "Ws":
                if (["J", "VAs", "Nm"].includes(target)) {
                    element.innerHTML = number + target;
                }
                else if ("Wh" == target) {
                    element.innerHTML = format((number)/3600) + target;
                }
                else if ("kWh" == target) {
                    element.innerHTML = format((number)/3600000) + target; 
                }
                else if ("kcal" == target) {
                    element.innerHTML = format(number / kcal) + target;
                }
                else {
                    showError('einheiten-00');
                }
            break;

            case "VAs":
                if (["Ws", "J", "Nm"].includes(target)) {
                    element.innerHTML = number + target;
                }
                else if ("Wh" == target) {
                    element.innerHTML = format((number)/3600) + target;
                }
                else if ("kWh" == target) {
                    element.innerHTML = format((number)/3600000) + target; 
                }
                else if ("kcal" == target) {
                    element.innerHTML = format(number / kcal) + target;
                }
                else {
                    showError('einheiten-00');
                }
            break;

            case "Nm":
                if (["Ws", "VAs", "J"].includes(target)) {
                    element.innerHTML = number + target;
                }
                else if ("Wh" == target) {
                    element.innerHTML = format((number)/3600) + target;
                }
                else if ("kWh" == target) {
                    element.innerHTML = format((number)/3600000) + target; 
                }
                else if ("kcal" == target) {
                    element.innerHTML = format(number/kcal) + target;
                }
                else {
                    showError('einheiten-00');
                }
            break;

            case "Wh":
                if (["J", "Ws", "VAs", "Nm"].includes(target)) {
                    element.innerHTML = format(number * 3600) + target;
                }
                else if ("kWh" == target) {
                    element.innerHTML = format((number)/1000) + target; 
                }
                else if ("kcal" == target) {
                    element.innerHTML = format(number*3600/kcal) + target;
                }
                else {
                    showError('einheiten-00');
                }
            break;

            case "kWh":
                if (["J", "Ws", "VAs", "Nm"].includes(target)) {
                    element.innerHTML = format(number * 3600000) + target;
                }
                else if ("Wh" == target) {
                    element.innerHTML = format((number)*1000) + target; 
                }
                else if ("kcal" == target) {
                    element.innerHTML = format(number*3600000/kcal) + target;
                }
                else {
                    showError('einheiten-00');
                }
            break;
        }
    }
    else if (start == "" || target == "" || number == "") {
        // nothing
    }
    else {
        showError('einheiten-00');
    }
}

// für die Umrechnung von Maßen
function massUmrechnen() {
    var start = document.getElementById('measure-start').value;
    var target = document.getElementById('measure-target').value;
    var number = document.getElementById('measure-number').value;

    if (Measure.includes(start) && Measure.includes(target) && number != "") {
        hideError('einheiten-01');
        let element = document.getElementById('measure-value');

        switch (start) {
            case "Fuß":
                if (target == "Zoll") {
                    element.innerHTML = format(number * 12) + measureFormat(target);
                }
                else if (target == "Meilen") {
                    element.innerHTML = format(number/5280) + measureFormat(target);
                }
                else if (target == "Kilometer") {
                    element.innerHTML = format(number/3281) + measureFormat(target);
                }
                else if (target == "Meter") {
                    element.innerHTML = format(number/3.281) + measureFormat(target);
                }
                else if (target == "Zentimeter") {
                    element.innerHTML = format(number * 30.48) + measureFormat(target);
                }
                else if (target == "Millimeter") {
                    element.innerHTML = format(number * 305) + measureFormat(target);
                }
                else {
                    showError('einheiten-01');
                }
            break;

            case "Zoll":
                if (target == "Fuß") {
                    element.innerHTML = format(number/12) + measureFormat(target);
                }
                else if (target == "Meilen") {
                    element.innerHTML = format(number/63360) + measureFormat(target);
                }
                else if (target == "Kilometer") {
                    element.innerHTML = format(number/39370) + measureFormat(target);
                }
                else if (target == "Meter") {
                    element.innerHTML = format(number/39.37) + measureFormat(target);
                }
                else if (target == "Zentimeter") {
                    element.innerHTML = format(number * 2.54) + measureFormat(target);
                }
                else if (target == "Millimeter") {
                    element.innerHTML = format(number * 25.4) + measureFormat(target);
                }
                else {
                    showError('einheiten-01');
                }
            break;

            case "Meilen":
                if (target == "Fuß") {
                    element.innerHTML = format(number*5280) + measureFormat(target);
                }
                else if (target == "Zoll") {
                    element.innerHTML = format(number*63360) + measureFormat(target);
                }
                else if (target == "Kilometer") {
                    element.innerHTML = format(number*1.609) + measureFormat(target);
                }
                else if (target == "Meter") {
                    element.innerHTML = format(number*1609) + measureFormat(target);
                }
                else if (target == "Zentimeter") {
                    element.innerHTML = format(number * 160934) + measureFormat(target);
                }
                else if (target == "Millimeter") {
                    element.innerHTML = format(number * 1609340) + measureFormat(target);
                }
                else {
                    showError('einheiten-01');
                }
            break;

            case "Kilometer":
                if (target == "Fuß") {
                    element.innerHTML = format(number*3281) + measureFormat(target);
                }
                else if (target == "Zoll") {
                    element.innerHTML = format(number*39370) + measureFormat(target);
                }
                else if (target == "Meilen") {
                    element.innerHTML = format(number/1.609) + measureFormat(target);
                }
                else if (target == "Meter") {
                    element.innerHTML = format(number*1000) + measureFormat(target);
                }
                else if (target == "Zentimeter") {
                    element.innerHTML = format(number * 100000) + measureFormat(target);
                }
                else if (target == "Millimeter") {
                    element.innerHTML = format(number * 1000000) + measureFormat(target);
                }
                else {
                    showError('einheiten-01');
                }
            break;

            case "Meter":
                if (target == "Fuß") {
                    element.innerHTML = format(number*3.281) + measureFormat(target);
                }
                else if (target == "Zoll") {
                    element.innerHTML = format(number*39.37) + measureFormat(target);
                }
                else if (target == "Meilen") {
                    element.innerHTML = format(number/1609) + measureFormat(target);
                }
                else if (target == "Kilometer") {
                    element.innerHTML = format(number/1000) + measureFormat(target);
                }
                else if (target == "Zentimeter") {
                    element.innerHTML = format(number*100) + measureFormat(target);
                }
                else if (target == "Millimeter") {
                    element.innerHTML = format(number*1000) + measureFormat(target);
                }
                else {
                    showError('einheiten-01');
                }
            break;

            case "Zentimeter":
                if (target == "Fuß") {
                    element.innerHTML = format(number/30.48) + measureFormat(target);
                }
                else if (target == "Zoll") {
                    element.innerHTML = format(number/2.54) + measureFormat(target);
                }
                else if (target == "Meilen") {
                    element.innerHTML = format(number/160934) + measureFormat(target);
                }
                else if (target == "Kilometer") {
                    element.innerHTML = format(number/100000) + measureFormat(target);
                }
                else if (target == "Meter") {
                    element.innerHTML = format(number/100) + measureFormat(target);
                }
                else if (target == "Millimeter") {
                    element.innerHTML = format(number*10) + measureFormat(target);
                }
                else {
                    showError('einheiten-01');
                }
            break;

            case "Millimeter":
                if (target == "Fuß") {
                    element.innerHTML = format(number/305) + measureFormat(target);
                }
                else if (target == "Zoll") {
                    element.innerHTML = format(number/25.4) + measureFormat(target);
                }
                else if (target == "Meilen") {
                    element.innerHTML = format(number/1609340) + measureFormat(target);
                }
                else if (target == "Kilometer") {
                    element.innerHTML = format(number/1000000) + measureFormat(target);
                }
                else if (target == "Meter") {
                    element.innerHTML = format(number/1000) + measureFormat(target);
                }
                else if (target == "Zentimeter") {
                    element.innerHTML = format(number/10) + measureFormat(target);
                }
                else {
                    showError('einheiten-01');
                }
            break;
        }
    }
    else if (start == "" || target == "" || number == "") {
        // nothing
    }
    else {
        showError('einheiten-01');
    }
}

function measureFormat(measure) {
    switch (measure) {
        case "Fuß":
            return "ft";
        break;

        case "Zoll":
            return "in";
        break;

        case "Meilen":
            return "mi";
        break;

        case "Kilometer":
            return "km";
        break;

        case "Meter": 
            return "m";
        break;

        case "Zentimeter":
            return "cm";
        break;

        case "Millimeter":
            return "mm";
        break;
    }
}

// für das Umrechen von Massen
function gewichtUmrechnen() {
    var start = document.getElementById('mass-start').value;
    var target = document.getElementById('mass-target').value;
    var number = document.getElementById('mass-number').value;
    var element = document.getElementById('mass-value');

    if (Mass.includes(start) && Mass.includes(target) && number != "") {
        hideError('einheiten-02');

        switch (start) {
            case "Pfund":
                if (target == "Unze") {
                    element.innerHTML = format(number * 16) + massFormat(target);
                } 
                else if (target == "Tonne") {
                    element.innerHTML = format(number/2205) + massFormat(target);
                }
                else if (target == "Kilogramm") {
                    element.innerHTML = format(number/2.205) + massFormat(target);
                }
                else if (target == "Gramm") {
                    element.innerHTML = format(number*454) + massFormat(target);
                }
                else {
                    showError('einheiten-02');
                }
            break;

            case "Unze":
                if (target == "Pfund") {
                    element.innerHTML = format(number/16) + massFormat(target);
                } 
                else if (target == "Tonne") {
                    element.innerHTML = format(number/35274) + massFormat(target);
                }
                else if (target == "Kilogramm") {
                    element.innerHTML = format(number/35.274) + massFormat(target);
                }
                else if (target == "Gramm") {
                    element.innerHTML = format(number*28.35) + massFormat(target);
                }
                else {
                    showError('einheiten-02');
                }
            break;

            case "Tonne":
                if (target == "Pfund") {
                    element.innerHTML = format(number*2205) + massFormat(target);
                } 
                else if (target == "Unze") {
                    element.innerHTML = format(number*35274) + massFormat(target);
                }
                else if (target == "Kilogramm") {
                    element.innerHTML = format(number*1000) + massFormat(target);
                }
                else if (target == "Gramm") {
                    element.innerHTML = format(number*1000000) + massFormat(target);
                }
                else {
                    showError('einheiten-02');
                }
            break;

            case "Kilogramm":
                if (target == "Pfund") {
                    element.innerHTML = format(number*2.205) + massFormat(target);
                } 
                else if (target == "Unze") {
                    element.innerHTML = format(number*35.274) + massFormat(target);
                }
                else if (target == "Tonne") {
                    element.innerHTML = format(number/1000) + massFormat(target);
                }
                else if (target == "Gramm") {
                    element.innerHTML = format(number*1000) + massFormat(target);
                }
                else {
                    showError('einheiten-02');
                }
            break;

            case "Gramm":
                if (target == "Pfund") {
                    element.innerHTML = format(number/454) + massFormat(target);
                } 
                else if (target == "Unze") {
                    element.innerHTML = format(number/28.35) + massFormat(target);
                }
                else if (target == "Tonne") {
                    element.innerHTML = format(number/1000000) + massFormat(target);
                }
                else if (target == "Kilogramm") {
                    element.innerHTML = format(number/1000) + massFormat(target);
                }
                else {
                    showError('einheiten-02');
                }
            break;
        }
    }
    else if (start == "" || target == "" || number == "") {
        // nothing
    }
    else {
        showError('einheiten-02');
    }
}

function massFormat(mass) {
    switch (mass) {
        case "Pfund":
            return "lb";
        break;

        case "Unze":
            return "oz";
        break;

        case "Tonne":
            return "t";
        break;

        case "Kilogramm":
            return "kg";
        break;

        case "Gramm": 
            return "g";
        break;
    }
}

function tempUmrechnen() {
    var start = document.getElementById('temp-start').value;
    var target = document.getElementById('temp-target').value;
    var number = document.getElementById('temp-number').value;
    var element = document.getElementById('temp-value');
    
    if (Temp.includes(start) && Temp.includes(target) && number != "") {
        hideError('einheiten-03');

        switch (start) {
            case "Kelvin":
                if (target == "Celsius") {
                    element.innerHTML = format(number - 273) + tempFormat(target);
                }
                else if (target == "Fahrenheit") {
                    element.innerHTML = format((number - 273)*(9/5)+32) + tempFormat(target);
                }
                else {
                    showError('einheiten-03');
                }
            break;

            case "Celsius":
                if (target == "Kelvin") {
                    element.innerHTML = format(Number.parseInt(number) + 273) + tempFormat(target);
                }
                else if (target == "Fahrenheit") {
                    element.innerHTML = format(number*(9/5)+32) + tempFormat(target);
                }
                else {
                    showError('einheiten-03');
                }
            break;

            case "Fahrenheit":
                if (target == "Kelvin") {
                    element.innerHTML = format((number - 32) * (5/9) + 273) + tempFormat(target);
                }
                else if (target == "Celsius") {
                    element.innerHTML = format((number - 32) * (5/9)) + tempFormat(target);
                }
                else {
                    showError('einheiten-03');
                }
            break;
        }
    }
    else if (start == "" || target == "" || number == "") {
        // nothing
    }
    else {
        showError('einheiten-03');
    }
}

function tempFormat(temp) {
    switch (temp) {
        case "Kelvin":
            return "K";
        break;

        case "Celsius":
            return "°C";
        break;

        case "Fahrenheit":
            return "°F";
        break;
    }
}