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

const shortMeasure = {
    feet: "ft",
    zoll: "in",
    mile: "mi"
    
}

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

}