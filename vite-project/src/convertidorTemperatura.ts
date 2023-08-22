const temperaturaInput: HTMLInputElement | null = document.querySelector('#temperaturaInput');
const convertirCelsiusBtn: HTMLButtonElement | null = document.querySelector('#convertirCelsiusBtn');
const convertirFahrenheitBtn: HTMLButtonElement | null = document.querySelector('#convertirFahrenheitBtn');
const conversionDiv: HTMLDivElement | null = document.querySelector('#conversionDiv');

if (temperaturaInput && convertirCelsiusBtn && convertirFahrenheitBtn && conversionDiv) {
  convertirCelsiusBtn.addEventListener('click', () => {
    const temperaturaCelsius: number = parseFloat(temperaturaInput.value);
    const temperaturaFahrenheit: number = (temperaturaCelsius * 9/5) + 32;
    conversionDiv.textContent = `${temperaturaCelsius} °C equivale a ${temperaturaFahrenheit.toFixed(2)} °F`;
  });

  convertirFahrenheitBtn.addEventListener('click', () => {
    const temperaturaFahrenheit: number = parseFloat(temperaturaInput.value);
    const temperaturaCelsius: number = (temperaturaFahrenheit - 32) * 5/9;
    conversionDiv.textContent = `${temperaturaFahrenheit} °F equivale a ${temperaturaCelsius.toFixed(2)} °C`;
  });
}
