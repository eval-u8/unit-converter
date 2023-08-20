const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthP = document.getElementById("length-p");
const volumeP = document.getElementById("volume-p");
const massP = document.getElementById("mass-p");

const meterToFeet = 3.28084;
const literToGallon = 0.264172;
const kiloToPound = 2.204623;

convertBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;

  lengthP.textContent = `${inputValue} meters = ${(
    inputValue * meterToFeet
  ).toFixed(3)} feet | ${inputValue} feet = ${(
    inputValue / meterToFeet
  ).toFixed(3)} meters`;

  volumeP.textContent = `${inputValue} liters = ${(
    inputValue * literToGallon
  ).toFixed(3)} gallons | ${inputValue} gallons = ${(
    inputValue / literToGallon
  ).toFixed(3)} liters`;

  massP.textContent = `${inputValue} kilos = ${(
    inputValue * kiloToPound
  ).toFixed(3)} pounds | ${inputValue} pounds = ${(
    inputValue / kiloToPound
  ).toFixed(3)} kilos`;
});
