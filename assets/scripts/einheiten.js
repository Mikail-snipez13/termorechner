const Energy = [
    "kcal",
    "J", 
    "Ws", 
    "Wh",
    "kWh",
    "VAs", 
    "Nm"
]

// einheiten umrechner
function energieUmrechnen() {
    var start = document.getElementById('energy-start').value;
    var target = document.getElementById('energy-target').value;
    var number = document.getElementById('energy-number').value;
    
    console.log(start + " : " + target + " : " + number);

    if (Energy.includes(start) && Energy.includes(target) && number != "" && start != target) {
        hideError('einheiten-00');
        switch (start) {
            case "kcal": 
                if (["J", "Ws", "VAs", "Nm"].includes(target)) {
                    hideError('einheiten-00');
                    document.getElementById('energy-value').innerHTML = format(number * 4.2) + target;
                }
        }
    }
    else if (start == "" || target == "" || number == "") {
        // nothing
    }
    else {
        showError('einheiten-00');
    }
}
