const inputCelsius = document.getElementById("tempCelcius");
const inputFahrenheit = document.getElementById("tempFahrenheit");
const inputKelvin = document.getElementById("tempKelvin");
const inputRankine = document.getElementById("tempRankine");

const inputs = document.getElementsByClassName("input");


for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];


    input.addEventListener("input", function (x)
    {
        let value = parseFloat(x.target.value);
        
        switch (x.target.name) {
            case "tempCelcius":
                inputFahrenheit.value = (value * 1.8) + 32;
                inputKelvin.value = value + 273.15;
                inputRankine.value = (value + 273.15) * 9/5;
                break;

            case "tempFahrenheit":
                inputCelsius.value = (value - 32) / 1.8;
                inputKelvin.value = ((value - 32) / 1.8) + 273.15;
                inputRankine.value = value + 459.67;
                break;

            case "tempKelvin":
                inputCelsius.value = value - 273.15;
                inputFahrenheit.value = ((value - 273.15) * 1.8) + 32;
                inputRankine.value = value * 9/5;
                break;

            case "tempRankine":
                inputCelsius.value = (value * 5/9) - 273.15;
                inputFahrenheit.value = (value - 459.67);
                inputKelvin.value = value * 5/9;
                break;
        }
    });
}
