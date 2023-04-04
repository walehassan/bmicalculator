function BMI(){
    var h = document.getElementById('h').value;
    var w = document.getElementById('w').value;
    var bmi = w/(h/100*h/100);
    var bmioVal = (bmi.toFixed(2));


    document.getElementById('result').innerHTML="your BMI is" + bmioVal;
    //get  status value and update DOM
    document.getElementById('status').innerHTML= "Your status is" + getStatus(bmioVal);
}

function getStatus(bmioVal) {
    let status = ""
    if (bmio < 18.5) {
        status = "underweight"
    }

    if (bmio > 18.5 && bmio < 24.9){
        status = "normal"
    }

    if (bmio > 25.0 && bmio < 29.9){
        status = "overweight"
    }

    if (bmio > 30 ) {
        status = "obese"
    }

    return status
}