const convertToCelsius = function(fahrenheit) {
  let formulae = (fahrenheit-32)*5/9;
  formulae = Math.round(formulae*10)/10
  return formulae
};

const convertToFahrenheit = function(celcius) {
  let formulae = (celcius*(9/5))+32;
  formulae = Math.round(formulae*10)/10
  return formulae
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
