/* = = = = = Global Variables = = = = = */
let totalResult = 0;
let planPrice = 0;
let planTitle = '';
let addonsList = [];
let count = 0;

// DOM Elements
let TotalResult = document.getElementById('Total-result');
let planName = document.getElementById('planname');
let planDate = document.getElementById('planedate');
let planPriceOutput = document.getElementById('planprice');
let planDuration = document.getElementById('planedururation');
let second = document.getElementsByClassName('sceond')[0];
let right = document.querySelector('.right');
let right2 = document.querySelector('.right-2');
let right3 = document.querySelector('.right-3');
let right4 = document.querySelector('.right-4');

let back1btn = document.getElementById('backbtn1');
let back2btn = document.getElementById('backbtn2');
let back3btn = document.getElementById('backbtn3');

let step1h1 = document.getElementById('step1h1');
let step2h1 = document.getElementById('step2h1');
let step3h1 = document.getElementById('step3h1');
let step4h1 = document.getElementById('step4h1');

let arcadePackage = document.querySelector('.arcade');
let advancedPackage = document.querySelector('.advanced');
let proPackage = document.querySelector('.pro');

let month = document.getElementById('month');
let yearly = document.getElementById('yearly');

let planetitle1 = document.getElementById('planetitle1');
let planetitle2 = document.getElementById('planetitle2');
let planetitle3 = document.getElementById('planetitle3');

let arcadePriceEl = document.getElementById('arcadeprice');
let advancedPriceEl = document.getElementById('advancedprice');
let proPriceEl = document.getElementById('proprice');

let step1Price = document.getElementById('step1-price');
let step2Price = document.getElementById('step2-price');
let step3Price = document.getElementById('step3-price');

let checkbox1 = document.getElementById('checkbox');
let checkbox2 = document.getElementById('checkbox1');
let checkbox3 = document.getElementById('checkbox2');

let toggleParent = document.querySelector('.toggle-container');

let arcadeChecked = 0;
let advancedChecked = 0;
let proChecked = 0;
let toggleYearly = 0;

// Input fields
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('phone');

// Buttons
let nextBtn = document.getElementById('submitbtn');
let nextBtn2 = document.querySelector('.submit');
let nextBtn3 = document.querySelector('.submit1');

/* = = = = Clear Selections = = = = */
function clearAdvanced() {
    arcadePackage.style.border = '1px solid rgba(0,0,0,0.1)';
    arcadePackage.style.backgroundColor = '';
    proPackage.style.border = '1px solid rgba(0,0,0,0.1)';
    proPackage.style.backgroundColor = '';
    arcadeChecked = 0;
    proChecked = 0;
}
function clearPro() {
    advancedPackage.style.border = '1px solid rgba(0,0,0,0.1)';
    advancedPackage.style.backgroundColor = '';
    arcadePackage.style.border = '1px solid rgba(0,0,0,0.1)';
    arcadePackage.style.backgroundColor = '';
    advancedChecked = 0;
    arcadeChecked = 0;
}
function clearArcade() {
    advancedPackage.style.border = '1px solid rgba(0,0,0,0.1)';
    advancedPackage.style.backgroundColor = '';
    proPackage.style.border = '1px solid rgba(0,0,0,0.1)';
    proPackage.style.backgroundColor = '';
    advancedChecked = 0;
    proChecked = 0;
}

/* = = = Toggle Button = = = */
toggleParent.addEventListener('click', function () {
    if (toggleYearly === 0) {
        toggleYearly = 1;
        toggleParent.style.justifyContent = 'flex-end';
        yearly.style.color = 'hsl(213, 96%, 18%)';
        month.style.color = 'hsl(231, 11%, 63%)';
    } else {
        toggleYearly = 0;
        toggleParent.style.justifyContent = 'flex-start';
        yearly.style.color = 'hsl(231, 11%, 63%)';
        month.style.color = 'hsl(213, 96%, 18%)';
    }
});

/* = = = Step 1: Validation = = = */
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePattern = /^[a-zA-Z\s]+$/;
const phonePattern = /^[0-9]{10,15}$/;

nextBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let phone = phoneInput.value.trim();
    let email = emailInput.value.trim();
    let name = nameInput.value.trim();

    nameInput.style.borderColor = '';
    emailInput.style.borderColor = '';
    phoneInput.style.borderColor = '';

    if (!namePattern.test(name)) {
        nameInput.style.borderColor = 'red';
        return; 
    } else {
        nameInput.style.borderColor = 'green';
    }
    if (!emailPattern.test(email)) {
        emailInput.style.borderColor = 'red';
        return;
    } else {
        emailInput.style.borderColor = 'green';
    }
    if (!phonePattern.test(phone)) {
        phoneInput.style.borderColor = 'red';
        return;
    } else {
        phoneInput.style.borderColor = 'green';
    }

    count++; // এখন count বাড়ানো হবে
    updateStepColors();
    right.style.display = 'none';
    right2.style.display = 'flex';
});

/* = = = Step 2: Package Selection = = = */
arcadePackage.addEventListener('click', function () {
    arcadeChecked = 1;
    clearArcade();
    arcadePackage.style.border = '1px solid rgba(0,0,0,0.886)';
    arcadePackage.style.backgroundColor = 'rgba(0,0,0,0.062)';
});

advancedPackage.addEventListener('click', function () {
    advancedChecked = 1;
    clearAdvanced();
    advancedPackage.style.border = '1px solid rgba(0,0,0,0.886)';
    advancedPackage.style.backgroundColor = 'rgba(0,0,0,0.062)';
});

proPackage.addEventListener('click', function () {
    proChecked = 1;
    clearPro();
    proPackage.style.border = '1px solid rgba(0,0,0,0.886)';
    proPackage.style.backgroundColor = 'rgba(0,0,0,0.062)';
});

nextBtn2.addEventListener('click', function () {
    if (arcadeChecked || advancedChecked || proChecked) {
        if (arcadeChecked) {
            planPrice = Number(arcadePriceEl.innerText.replace('$', ''));
            planTitle = planetitle1.innerText;
        } else if (advancedChecked) {
            planPrice = Number(advancedPriceEl.innerText.replace('$', ''));
            planTitle = planetitle2.innerText;
        } else if (proChecked) {
            planPrice = Number(proPriceEl.innerText.replace('$', ''));
            planTitle = planetitle3.innerText;
        }

      
        if (toggleYearly) {
            planPrice *= 10;
            planDate.innerText = 'yearly';
            planDuration.innerText = 'yr';
        } else {
            planDate.innerText = 'monthly';
            planDuration.innerText = 'mon';
        }

        planName.innerText = planTitle;
        planPriceOutput.innerText = `$${planPrice}`;
        totalResult = planPrice;

        count++;
        updateStepColors();
        right2.style.display = 'none';
        right3.style.display = 'flex';
    } else {
        alert('Please select one option');
    }
});

/* Create Addon Element */
function createAddonElement(title, price) {
    let h1 = document.createElement('h1');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    p1.innerText = title;
    p2.innerText = `+$${price}/${planDuration.innerText}`;

    h1.appendChild(p1);
    h1.appendChild(p2);
    second.appendChild(h1);
}

/* = = = Step 3: Add-ons = = = */
nextBtn3.addEventListener('click', function () {

    second.innerHTML = ''; 
    totalResult = planPrice; 
    if (checkbox1.checked) {
        let price = Number(step1Price.innerText.replace('$', ''));
        if (toggleYearly) price *= 10;
        totalResult += price;
        createAddonElement("Online Service", price);
    }
    if (checkbox2.checked) {
        let price = Number(step2Price.innerText.replace('$', ''));
        if (toggleYearly) price *= 10;
        totalResult += price;
        createAddonElement("Larger Storage", price);
    }
    if (checkbox3.checked) {
        let price = Number(step3Price.innerText.replace('$', ''));
        if (toggleYearly) price *= 10;
        totalResult += price;
        createAddonElement("Customizable Profile", price);
    }

    TotalResult.innerText = `$${totalResult}/${planDuration.innerText}`;
    count++;
    updateStepColors();
    right3.style.display = 'none';
    right4.style.display = 'flex';
});

/* = = = Step 4: back btn = = = */
back1btn.addEventListener('click', function () {
    right2.style.display = 'none';
    right.style.display = 'flex';
    count--;
    updateStepColors();
});

back2btn.addEventListener('click', function () {
    right3.style.display = 'none';
    right2.style.display = 'flex';
    count--;
    updateStepColors();
});

back3btn.addEventListener('click', function () {
    right4.style.display = 'none';
    right3.style.display = 'flex';
    count--;
    updateStepColors();
});

/* = = = Step Indicator Colors = = = */
function updateStepColors() {

    [step1h1, step2h1, step3h1, step4h1].forEach(el => {
        el.style.backgroundColor = '';
        el.style.color = '';
    });

    if (count === 0) {
        step1h1.style.backgroundColor = 'hsl(206, 94%, 87%)';
        step1h1.style.color = 'black';
    } else if (count === 1) {
        step2h1.style.backgroundColor = 'hsl(206, 94%, 87%)';
        step2h1.style.color = 'black';
    } else if (count === 2) {
        step3h1.style.backgroundColor = 'hsl(206, 94%, 87%)';
        step3h1.style.color = 'black';
    } else if (count === 3) {
        step4h1.style.backgroundColor = 'hsl(206, 94%, 87%)';
        step4h1.style.color = 'black';
    }
}


updateStepColors();