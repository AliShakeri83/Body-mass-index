let weight = document.querySelector("#weight")
let height = document.querySelector("#height")
let weightVal = document.querySelector("#weight-val")
let heightVal = document.querySelector("#height-val")
let result = document.querySelector("#result")
let category = document.querySelector("#category")


function myfunc(event) {
    let weightInputValue = parseInt(weight.value);
    weightVal.innerHTML = weightInputValue + " kg";
    let heightInputValue = parseInt(height.value);
    heightVal.innerHTML = heightInputValue + " cm";

    let bmi = (weightInputValue  / (heightInputValue * heightInputValue / 10000)).toFixed(1);

    result.innerHTML = bmi;

    if (bmi<18.5) {
        category.innerHTML = 'Underweight'
        category.style.color = 'green'
        result.style.color = 'green'
    } else if (18.5<=bmi && bmi<24.9) {
        category.innerHTML = 'Normal weight'
        category.style.color = 'black'
        result.style.color = 'black'
    } else if (25<=bmi && bmi<29.9) {
        category.innerHTML = 'OverWeight'
        category.style.color = 'orange'
        result.style.color = 'orange'
    } else {
        category.innerHTML = 'Obese'
        category.style.color = 'red'
        result.style.color = 'red'
    }
}



weight.addEventListener('input', myfunc)
height.addEventListener('input', myfunc)