const KELVIN_FACTOR = 273;
const celsiusTemperature = parseInt(prompt("Introduce una temperatura en Celsius: "));
const kelvinTemperature = celsiusTemperature + KELVIN_FACTOR;
console.log(`La temperatura ${celsiusTemperature}ºC en Kelvin son ${kelvinTemperature}ºK`);