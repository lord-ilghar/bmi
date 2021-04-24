//global object
let global = {
    mass: 0,
    height: 0
}

// DOM Acces
const massDOM = document.getElementById('mass');
const heightDOM = document.getElementById('height');
const underwieght = document.getElementsByClassName('under')[0];
const elems = document.getElementsByClassName('cont');
const normal = document.getElementsByClassName('normal')[0];
const overwieght = document.getElementsByClassName('over')[0];
const obse = document.getElementsByClassName('obs')[0];
const exobse = document.getElementsByClassName('exobs')[0];
const submit = document.getElementById('submit');
const bmishow = document.getElementsByClassName('bmishow');

//Events
window.addEventListener('load', () => removeallitems()); // remove all BMI at first

heightDOM.addEventListener('change', () => {
    global.height = Number.parseFloat(heightDOM.value / 100);
});

massDOM.addEventListener('change', () => {
    global.mass = Number.parseInt(massDOM.value);
});

submit.addEventListener('click', () => {
    removeallitems();
    showitems();
    showbmi();
});

function removeallitems() { // this function removes all elemts
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.display = 'none';
    }
}

function showbmi() { // this function puts bmi value inside of its container
    for (let i = 0; i < bmishow.length; i++) {
        bmishow[i].textContent = bmibehine();
    }
}

function calbmi() { // calcluds the value of bmi as number value
    return (global.mass / Math.pow(global.height, 2));
}

function bmibehine() { // makes value of calbmi function simpler for UI
    return Number.parseFloat(calbmi().toFixed(2));
}

function inputerrhandels() { // checks if value of globale obj is standard and calcludble
    if (
        global.height >= 0.5 &&
        global.height <= 3 &&
        global.mass >= 20 &&
        global.mass <= 200) {
        return true;
    }
}
function normalBMI() { // return the value of bmi as state (normal , under wieght and ...)
    if (inputerrhandels()) {
        const BMIvalue = calbmi();
        if (BMIvalue < 18.5) return 'Under Wieght';
        else if (BMIvalue > 18.5 && BMIvalue < 24.9) return 'normal';
        else if (BMIvalue > 24.5 && BMIvalue < 29.9) return 'Over Wieght';
        else if (BMIvalue > 30 && BMIvalue < 34.9) return 'OBESE';
        else if (BMIvalue > 34.9 && BMIvalue < Infinity) return 'Extremely OBESE'
    }
}

function showitems() { // show the information in cards
    const vlaue = normalBMI();
    switch (vlaue) {
        case 'Under Wieght':
            underwieght.style.display = '';
            break;
        case 'normal':
            normal.style.display = '';
            break;

        case 'Over Wieght':
            overwieght.style.display = '';
            break;
        case 'OBESE':
            obse.style.display = '';
            break;
        case 'Extremely OBESE':
            exobse.style.display = ''
            break;
    }
}
//styles