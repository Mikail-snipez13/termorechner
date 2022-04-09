hideError();

// Wirkungsgrad
function calculateW() {
    var ab = document.getElementById('Eab').value; 
    var zu = document.getElementById('Ezu').value;
    //calculate the result
    if (ab != null && zu != null && ab <= zu) {
        hideErrorById('error-0');
        result = ab/zu;
        document.getElementById('wirkungsgrad').innerHTML = format(result);
    }
    else if (ab == null || zu == null || ab == '' || zu == '') {
        // nothing
    }
    else {
        showError("error-0");
    }

    //easter egg
    if (ab == 100 && zu == 100) {
        document.getElementById('wirkungsgrad').innerHTML = "🍕";
    }
}

// Constants
const ElementConstants = [
    {name: "Argon", cv: 317, cp: 525, ri: 208.13},
    {name: "Helium", cv: 3161, cp: 5238, ri: 2076.94},
    {name: "Wasserstoff", cv: 10046, cp: 14170, ri: 4124.01},
    {name: "Sauerstoff", sauerstoff: 654, cp: 914, ri: 259.81},
    {name: "Stickstoff", cv: 741, cp: 1038, ri: 296.79}, 
    {name: "Luft", cv: 716, cp: 1003, ri: 287.06},
    {name: "Kohlenmonoxid", cv: 743, cp: 1040, ri: 296.82},
    {name: "Kohlendioxid", cv: 630, cp: 819, ri: 188.91},
    {name: "Methan", cv: 1637, cp: 2155, ri: 518.23}
]

// options of elements
const options = [
    "Argon",
    "Helium",
    "Wasserstoff",
    "Sauerstoff", 
    "Stickstoff", 
    "Luft", 
    "Kohlenmonoxid",
    "Kohlendioxid",
    "Methan"
]

// thermal energy 1
function getTempEnergie1() {
    var capacity = document.getElementById("temp-energie-1-cv").value;
    var m = document.getElementById('temp-energie-1-m').value;
    var cv;
        for(var i = 0; i < ElementConstants.length; i++) {
            if (ElementConstants[i].name == capacity) {
                cv = ElementConstants[i].cv;
                break;
            }
        }
    var t2 = document.getElementById('temp-energie-1-t2').value;
    var t1 = document.getElementById('temp-energie-1-t1').value;
    
    if (m > 0 && cv > 0) {
        hideErrorById("error-1");
        var q = m * cv * (t2 - t1);
        document.getElementById('temp-energie-1-q').innerHTML = format(q) + "J";
    }
    else if (m == "", cv == "", t2 == "", t1 == "") {
        //nothing
    } else {
        showError("error-1");
    }
}

// thermal energie 2
function getTempEnergie2() {
    var capacity = document.getElementById("temp-energie-2-cp").value;
    var m = document.getElementById('temp-energie-2-m').value;
    var cp;
        for(var i = 0; i < ElementConstants.length; i++) {
            if (ElementConstants[i].name == capacity) {
                cp = ElementConstants[i].cp;
                break;
            }
        }
    var t2 = document.getElementById('temp-energie-2-t2').value;
    var t1 = document.getElementById('temp-energie-2-t1').value;
    
    if (m > 0 && cp > 0) {
        hideErrorById("error-2");
        var q = m * cp * (t2 - t1);
        document.getElementById('temp-energie-2-q').innerHTML = format(q) + "J";
    }
    else if (m == "", cp == "", t2 == "", t1 == "") {
        //nothing
    } else {
        showError("error-2");
    }
}

/**
 * calculate the potential energy
 */
function getPot() {
    var m = document.getElementById('pot-energie-m').value;
    var g = document.getElementById('pot-energie-a').value;
    var h = document.getElementById('pot-energie-h').value;

    if (m > 0 && g != 0 && h != 0) {
        hideError('error-3');
        document.getElementById('pot-energie-e').innerHTML = format(m * g * h) + "J";
    } 
    else if (m == "" || g == "" || h == "") {
        //nothing
    }
    else {
        showError('error-3');
    }
}

// kinetic energy
function getKin() {
    var m = document.getElementById('kin-energie-m').value;
    var v = document.getElementById('kin-energie-v').value;

    if (m > 0 && v != "") {
        hideError("error-4");
        document.getElementById('kin-energie-e').innerHTML = format(0.5 * m * v^2) + "J";
    }
    else if (m == "" || v == "") {
        //nothing
    }
    else {
        showError("error-4");
    }
}

// mechanical energy of an isobaric process
function wIsobar() {
    var p = document.getElementById('w-isobar-p').value;
    var v2 = document.getElementById('w-isobar-v2').value;
    var v1 = document.getElementById('w-isobar-v1').value;

    if (p != "" && v2 != "" && v1 != "") {
        hideError('error-5')
        document.getElementById('w-isobar-e').innerHTML = format(-p*(v2-v1)) + "J";
    }
    else if (p != "" || v2 != "" || v1 != "") {
        //nothing
    }
    else {
        showError('error-5')
    }
}

// machanical energy of an isochoric process
function wIsotherm() {
    console.log('calculate')
    var selectedElement = document.getElementById('w-isotherm-ri').value;
    var m = document.getElementById('w-isotherm-m').value;
    var ri;
        for(var i = 0; i < ElementConstants.length; i++) {
            if (ElementConstants[i].name == selectedElement) {
                ri = ElementConstants[i].ri;
                break;
            }
        }
    var t = document.getElementById('w-isotherm-t').value; 
    var v1 = document.getElementById('w-isotherm-v1').value;
    var v2 = document.getElementById('w-isotherm-v2').value;

    console.log(`${selectedElement}: ${ri}`);
    if (m > 0 && ri > 0 && t != "" && v1 != "" && v2 != "") {
        hideError('error-6');
        document.getElementById('w-isotherm-e').innerHTML = format((-m)*ri*t* Math.log(v2/v1)) + "J";
    }
    else if (m == "" || ri == "" || t == "" || v1 == "" || v2 == "") {
        // nothing
    }
    else {
        showError("error-6");
    }
}

function hideError() {
    var elements = document.getElementsByClassName('error-text');

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = 0; 
        elements[i].style.height = 0; 
    }
}

function hideErrorById(id) {
    var error = document.getElementById(id);
    error.style.opacity = 0; 
    error.style.height = 0;
}

function showError(id) {
    var error = document.getElementById(id);
    error.style.opacity = 100; 
    error.style.height = 'auto';
}