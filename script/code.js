function convert() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    let result;
        
        if (fromUnit === 'F' && toUnit === 'C'){
            result = (temperature - 32) * 5/9;
            console.log(temperature + ' Fahrenheit is ' + result.toFixed(2) + ' Celsius');
        }
        
        else if (fromUnit === 'C' && toUnit === 'F') {
            result = (temperature * 9/5) + 32;
            console.log(temperature + ' Celsius is ' + result.toFixed(2) + ' Fahrenheit');
        }
        document.getElementById('result').value = result.toFixed(2);
}

    



