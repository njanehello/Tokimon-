// Global Variables
var inputArray = document.querySelectorAll(".inputs");

/*
    Getters for Attributes
*/

function getTrainerName() {
    return document.querySelector("#trn").value;
}
function getName() {
    return document.querySelector("#tn").value;
}

function getWeight() {
    return parseInt(document.querySelector("#w").value);
}

function getHeight() {
    return parseInt(document.querySelector("#h").value);
}

function getFly() {
    return parseInt(document.querySelector("#fl").value);
}


function getFire() {
    return parseInt(document.querySelector("#fi").value);
}

function getWater() {
    return parseInt(document.querySelector("#wa").value);
}

function getElectric() {
    return parseInt(document.querySelector("#e").value);
}

function getFrozen() {
    return parseInt(document.querySelector("#fr").value);
}

function getTotal() {
    return parseInt(document.querySelector("#total").value);
}

/*
    Setters for Attributes
*/

function setTrainerName(trainerName) {
    document.querySelector("#trn").value = trainerName;
}
function setName(name) {
    document.querySelector("#tn").value = name;
}

function setHeight(weight) {
    document.querySelector("#w").value = parseInt(weight);
}

function setWeight(height) {
    document.querySelector("#h").value = parseInt(height);
}

function setFly(fly) {
    document.querySelector("#fl").value = parseInt(fly);
}

function setFire(fire) {
    document.querySelector("#fi").value = parseInt(fire);
}

function setWater(water) {
    document.querySelector("#wa").value = parseInt(water);
}

function setElectric(electric) {
    document.querySelector("#e").value = parseInt(electric);
}

function setFrozen(ice) {
    document.querySelector("#fr").value = parseInt(ice);
}

function setTotal(total) {
    document.querySelector("#total").value = parseInt(total);
}


/*
    Function to create tokimon objects in JSON format
*/
function createTokimon() {
    let sum = (getFly() + getFire() + getWater() + getElectric() + getFrozen())
    var tokimon = {
        [tokimonname] : getName(),
        [height] : getHeight(),
        [weight] : getWeight(),
        [fly] : getFly(),
        [fire] : getFire(),
        [water] : getWater(),
        [electric] : getElectric(),
        [ice] : getIce(),
        [total] : sum
    }
}

/*
    Function to Calculate Total
    @return - return the total of the 6 other battle attributes
*/
function sumTotal() {
    return (getFly() + getFire() + getWater() + getElectric() + getFrozen());
}

/*
    Automatically Update Total Number on KeyPress/Click
*/
inputArray.forEach(function(element) {
    element.addEventListener("keyup", function() {
        setTotal(sumTotal());
    }
)});

inputArray.forEach(function(element) {
    element.addEventListener("click", function() {
        setTotal(sumTotal());
    }
)});


/*
Function to display or gray out clear all button
*/
function displayClearButton() {
    if (clearHidden) {
        document.querySelector("#clear_all_button").style.visibility = "visible";
        clearHidden = false;
    }
    else {
        for (var i = 0; i < objectArray.length; i++) {
            for (var j = 0; j < objectArray[i].length; j++) {
                if (objectArray[i][j].value) {
                    blank = false;
                }
            }
        }
        if (blank) {
            document.querySelector("#clear_all_button").style.background = "#B0BED9";
        } else {
            document.querySelector("#clear_all_button").style.background = "#a6192e";
        }
    }
}

/* 
Functions to perform percentage calculation in real-time
*/

//Function to convert into percentage format
function convertToPercent(num) {
    var pct = (num*100).toFixed(2) + "%";
    return pct;
}

// Function to go through all input fields and clear data
function clearForm() {
    if (!blank) {
        for (var i = 0; i < objectArray.length; i++) {
            for (var j = 0; j < objectArray[i].length; j++) {
                objectArray[i][j].value = '';
            }
        }
    }
}