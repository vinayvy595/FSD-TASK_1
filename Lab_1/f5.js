const temperatureConverter = {
    toCelsius: function (fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    },

    toFahrenheit: function (celsius) {
        return (celsius * 9 / 5) + 32;
    }
};

function convertTemperature() {
    const scale = prompt("Enter the scale you want to convert from (C for Celsius, F for Fahrenheit):").toUpperCase();
    const temperature = parseFloat(prompt("Enter the temperature value:"));

    let convertedTemperature;

    if (scale === 'C') {
        convertedTemperature = temperatureConverter.toFahrenheit(temperature);
        console.log(`${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`);
    } else if (scale === 'F') {
        convertedTemperature = temperatureConverter.toCelsius(temperature);
        console.log(`${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`);
    } else {
        console.log("Error: Invalid scale entered. Please enter 'C' or 'F'.");
    }
}

convertTemperature();
