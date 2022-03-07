
//set Variables für die Zustandsänderung
var t1, t2, p1, p2, v1, v2; 
var selects = {pos: null, to: null};
var elements = document.getElementsByClassName('calculationContainer');

//hide all calulation for Zustandsänderung
for (var i = 0; i < elements.length; i++) {
    hideElement(elements.item(i));
}

//berechnet Wirkungsgrad
const calculateW = () => {
    var ab = document.getElementById('Eab').value; 
    var zu = document.getElementById('Ezu').value;

    //calculate the result
    if (ab != null && zu != null) {
        result = ab/zu;
        document.getElementById('wirkungsgrad').innerHTML = format(result);
    }

    //easter egg
    if (ab == 100 && zu == 100) {
        document.getElementById('wirkungsgrad').innerHTML = "🍕";
    }
}

//checkbox Zustandsänderung
function setState(checkboxId) {

    var isIsochor = document.getElementById("isIsochor");
    var isIsotherm = document.getElementById("isIsotherm");
    var isIsobar = document.getElementById("isIsobar");
    var T1_selector = document.getElementById("t1-selector");
    var T2_selector = document.getElementById("t2-selector");
    var P1_selector = document.getElementById("p1-selector");
    var P2_selector = document.getElementById("p2-selector");
    var V1_selector = document.getElementById("v1-selector");
    var V2_selector = document.getElementById("v2-selector");

    //isobar
    if (checkboxId == "isobar") {
        isIsotherm.checked = false;
        isIsochor.checked = false;
        T1_selector.disabled = false;
        T2_selector.disabled = false;
        P1_selector.disabled = true; 
        P2_selector.disabled = true;
        V1_selector.disabled = false;
        V2_selector.disabled = false;
        selects.pos = 'isobar';
    }

    //isochor
    if (checkboxId == "isochor") {
        isIsotherm.checked = false;
        isIsobar.checked = false;
        T1_selector.disabled = false;
        T2_selector.disabled = false;
        P1_selector.disabled = false; 
        P2_selector.disabled = false;
        V1_selector.disabled = true;
        V2_selector.disabled = true;
        selects.pos = 'isochor'
    }

    //isotherm
    if (checkboxId == "isotherm") {
        isIsobar.checked = false;
        isIsochor.checked = false;
        T1_selector.disabled = true;
        T2_selector.disabled = true;
        P1_selector.disabled = false; 
        P2_selector.disabled = false;
        V1_selector.disabled = false;
        V2_selector.disabled = false;
        selects.pos = 'isotherm';
    }

    //all target selectors disabled
    selections = document.getElementsByClassName('searchSelection');
    for(var i = 0; i < selections.length; i++) {
        selections[i].checked = false;
    }
}

//set the target value by name
function setSearch(name) {
    selects.to = name;
    selections = document.getElementsByClassName('searchSelection');
    for(var i = 0; i < selections.length; i++) {
        selections[i].checked = false;
    }
    document.getElementById(selects.to + '-selector').checked = true;
}

//filter the needed calculation
function showCalculation() {
    for(var i = 0; i < elements.length; i++) {
        hideElement(elements.item(i));
    }
    id = selects.pos + '-' + selects.to;
    showElementById(id);
}

//to calculate the values
function calculation(name) {
    var res;
    var resText = document.getElementById('res-' + name);
    switch(name){
        //p1/t1 = p2/t2
        case 'isochor-t1':
            if(p1 != null && t2 != null && p2 != null){
                res = p1/(p2/t2); //t1
                resText.innerHTML = format(res) + 'K';
            }
            break;
        case 'isochor-t2':
            if(t1 != null && p1 != null && p2 != null){
                res = p2/(p1/t1); //t2
                resText.innerHTML = format(res) + 'K';
            }
            break;
        case 'isochor-p1':
            if(t1 != null && t2 != null && p2 != null){
                res = (p2/t2)*t1; //p1
                resText.innerHTML = format(res) + 'Pa';
            }
            break;
        case 'isochor-p2':
            if(t1 != null && t2 != null && p1 != null){
                res = (p1/t1)*t2; //p2
                resText.innerHTML = format(res) + 'Pa';
            }
            break;

        //v1/t1 = v2/t2 
        case 'isobar-t1':
            if(v1 != null && v2 != null && t2 != null){
                res = (v1*t2)/v2;
                resText.innerHTML = format(res) + 'K';
            }
            break;
        case 'isobar-t2':
            if(v1 != null && v2 != null && t1 != null){
                res = (v2*t1)/v1;
                resText.innerHTML = format(res) + 'K';
            }
            break;
        case 'isobar-v1':
            if(t2 != null && v2 != null && t1 != null){
                res = t1*(v2/t2);
                resText.innerHTML = format(res) + 'm<sup>3</sup>';
            }
            break;
        case 'isobar-v2':
            if(t2 != null && v1 != null && t1 != null){
                res = t2*(v1/t1);
                resText.innerHTML = format(res) + 'm<sup>3</sup>';
            }
            break;
        case 'isotherm-p1':
            if(p2 != null && v1 != null && v2 != null){
                res = (p2*v2)/v1;
                resText.innerHTML = format(res) + 'Pa';
            }
            break;
        case 'isotherm-p2':
            if(p1 != null && v1 != null && v2 != null){
                res = (p1*v1)/v2;
                resText.innerHTML = format(res) + 'Pa';
            }
            break;
        case 'isotherm-v1':
            if(p1 != null && p2 != null && v2 != null){
                res = (p2*v2)/p1;
                resText.innerHTML = format(res) + 'm<sup>3<sup>';
            }
            break;
        case 'isotherm-v2':
            if(p1 != null && p2 != null && v1 != null){
                res = (p1*v1)/p2;
                resText.innerHTML = format(res) + 'm<sup>3<sup>';
            }
            break;
    }
}

//to hide Element
function hideElementById(id) {
    element = document.getElementById(id);
    element.style.visibility = 'hidden';
    element.style.height = '0px';
    element.style.padding = '0px';
    element.style.margin = '0px';
}

function hideElement(element) {
    element.style.visibility = 'hidden';
    element.style.height = '0px';
    element.style.padding = '0px';
    element.style.margin = '0px';
}

//to show Element
function showElementById(id) {
    element = document.getElementById(id);
    element.style.visibility = 'visible';
    element.style.height = 'auto';
    element.style.padding = '10px 30px 10px 30px';
    element.style.margin = '0px 20px 10px 20px';
}

function showElement(element) {
    element.style.visibility = 'visible';
    element.style.height = 'auto';
}

//set values from input
function setThermoValue(name, id) {
    value = parseFloat(document.getElementById(id).value);
    switch (name){
        case 't1':
            t1 = value;
            break;
        case 't2':
            t2 = value;
            break;
        case 'p1':
            p1 = value;
            break;
        case 'p2':
            p2 = value;
            break;
        case 'v1':
            v1 = value;
            break;
        case 'v2': 
            v2 = value;
            break;
    }
}

//result formatter
function format(value) {
   return Math.floor(value * 1000)/1000;
}
