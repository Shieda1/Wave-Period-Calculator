// https://calculator.swiftutors.com/wave-period-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const wavePeriodRadio = document.getElementById('wavePeriodRadio');
const frequencyRadio = document.getElementById('frequencyRadio');

let wavePeriod;
let frequency = v1;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

wavePeriodRadio.addEventListener('click', function() {
  variable1.textContent = 'Frequency';
  frequency = v1;
  result.textContent = '';
});

frequencyRadio.addEventListener('click', function() {
  variable1.textContent = 'Wave Period (sec)';
  wavePeriod = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(wavePeriodRadio.checked)
    result.textContent = `Wave Period = ${computeWavePeriod().toFixed(5)} sec`;

  else if(frequencyRadio.checked)
    result.textContent = `Frequency = ${computeFrequency().toFixed(5)}`;
})

// calculation

function computeWavePeriod() {
  return 1 / Number(frequency.value);
}

function computeFrequency() {
  return 1 / Number(wavePeriod.value);
}