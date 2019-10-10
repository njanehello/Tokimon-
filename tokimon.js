
// Declaring Weight variables 

var totalWeight = 0.0;
var weight1 = 0.0;
var weight2 = 0.0;
var weight3 = 0.0;
var weight4 = 0.0;
var arrayWeightinputs = [0.0,0.0,0.0,0.0];

//Parse input weight values!
function checkInputWeights() {
    weight1 = parseFloat(document.querySelector("#Weight1").value);
    weight2 = parseFloat(document.querySelector("#Weight2").value);
    weight3 = parseFloat(document.querySelector("#Weight3").value);
    weight4 = parseFloat(document.querySelector("#Weight4").value);
}

// Declaring input variables 
var inputNum1 = 0.0;
var inputNum2 = 0.0;
var inputNum3 = 0.0;
var inputNum4 = 0.0;
var inputDen1 = 0.0;
var inputDen2 = 0.0;
var inputDen3 = 0.0;
var inputDen4 = 0.0;

// Calculated grades to be presented
var grade1 = 0.0;
var grade2 = 0.0;
var grade3 = 0.0;
var grade4 = 0.0;
var arrayInputs= [0.0,0.0,0.0,0.0];

// Parse input numerator and denominator values!

function checkInputA1() {
    inputNum1 = parseFloat(document.querySelector("#numeratorValue1").value);
    inputDen1 = parseFloat(document.querySelector("#denominatorValue1").value);
}
function checkInputA2() {
    inputNum2 = parseFloat(document.querySelector("#numeratorValue2").value);
    inputDen2 = parseFloat(document.querySelector("#denominatorValue2").value);
}

function checkInputA3() {
    inputNum3 = parseFloat(document.querySelector("#numeratorValue3").value);
    inputDen3 = parseFloat(document.querySelector("#denominatorValue3").value);
}

function checkInputA4() {
    inputNum4 = parseFloat(document.querySelector("#numeratorValue4").value);
    inputDen4 = parseFloat(document.querySelector("#denominatorValue4").value);
}

//Function to convert into percentage format
function percentConversion(numValue) {
    var percentConvert= (numValue).toFixed(2) + "%";
    return percentConvert;
}

// Function to make sure no grades are divided by 0 and to calculate percentage
function percentCalculation(inputNumerator, inputDenominator){
    if(inputDenominator == 0 || !isFinite(inputDenominator)) {
        percentage = 0;
    }
    else {
        percentage = (inputNumerator/inputDenominator) * 100;
    } 
    return percentage;
}
// Input A1 Numerator
document.querySelector(".numberatorInput1").addEventListener("keyup", function() {
    document.querySelector("#percent1").innerHTML = percentage1();
});

// Input A1 Denominator 
document.querySelector(".denominatorInput1").addEventListener("keyup", function() {
    document.querySelector("#percent1").innerHTML = percentage1();
});

// Calculate percentage of A1
function percentage1() {
    checkInputA1();
    grade1 = percentCalculation(inputNum1, inputDen1);
    return percentConversion(grade1);
}
// Input A2 Numerator
document.querySelector(".numberatorInput2").addEventListener("keyup", function() {
    document.querySelector("#percent2").innerHTML = percentage2();
});

// Input A2 Denominator
document.querySelector(".denominatorInput2").addEventListener("keyup", function() {
    document.querySelector("#percent2").innerHTML = percentage2();
});

// Calculate percentage of A2
function percentage2() {
    checkInputA2();
    grade2 = percentCalculation(inputNum2, inputDen2);
    return percentConversion(grade2);
}
// Input A3 Numerator
document.querySelector(".numberatorInput3").addEventListener("keyup", function() {
    document.querySelector("#percent3").innerHTML = percentage3();
   
});

// Input A3 Denominator
document.querySelector(".denominatorInput3").addEventListener("keyup", function() {
    document.querySelector("#percent3").innerHTML = percentage3();
});

// Function to calculate percentage of A3
function percentage3() {
    checkInputA3();
    grade3 = percentCalculation(inputNum3, inputDen3);
    return percentConversion(grade3);
}
// Input A4 Numerator
document.querySelector(".numberatorInput4").addEventListener("keyup", function() {
    document.querySelector("#percent4").innerHTML = percentage4();
});

// Input A3 Denominator
document.querySelector(".denominatorInput4").addEventListener("keyup", function() {
    document.querySelector("#percent4").innerHTML = percentage4();
});
// Function to calculate percentage of A4
function percentage4() {
    checkInputA4();
    grade4 = percentCalculation(inputNum4, inputDen4);
    return percentConversion(grade4);
}


//Function to calculate weight average 
function weightPercent(){
    checkInputWeights();
    var result = 0.0;
    var totalWeight = 0.0;
    if(inputDen1 != 0){
        arrayWeightinputs[0] = (inputNum1/inputDen1)*weight1;
        totalWeight += weight1;
    }
    if(inputDen2 != 0){
        arrayWeightinputs[1] = (inputNum2/inputDen2)*weight2;
        totalWeight += weight2;

    }
    if(inputDen3 != 0){
        arrayWeightinputs[2] = (inputNum3/inputDen3)*weight3;
        totalWeight += weight3;
    }

    if(inputDen4 != 0){
        arrayWeightinputs[3] = (inputNum4/inputDen4)*weight4;
        totalWeight += weight4;
    }
    for (var i = 0; i < arrayWeightinputs.length; i++) {
         result += arrayWeightinputs[i];
    }
    document.querySelector("#result").innerHTML = percentCalculation(result, totalWeight).toFixed(2) + "%";
}
document.querySelector("#weightButton").addEventListener("click", weightPercent);

//Function to calculate and display the mean percentage
function meanPercentCalculation(){
    var result = 0.0;
    var counter = 0.0;
    if(inputDen1 != 0){
        arrayInputs[0] = inputNum1/inputDen1;
        counter += 1;
    }
    if(inputDen2 != 0){
        arrayInputs[1] = inputNum2/inputDen2;
        counter += 1;

    }
    if(inputDen3 != 0){
        arrayInputs[2] = inputNum3/inputDen3;
        counter += 1;
        }

    if(inputDen4 != 0){
        arrayInputs[3] = inputNum4/inputDen4;
        counter += 1;
    }
    for (var i = 0; i < arrayInputs.length; i++) {
         result += arrayInputs[i];
    }
    document.querySelector("#result").innerHTML = percentCalculation(result, counter).toFixed(2) + "%";
}

document.querySelector("#meanButton").addEventListener("click", meanPercentCalculation);
