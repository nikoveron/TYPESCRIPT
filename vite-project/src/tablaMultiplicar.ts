const numeroTablaInput: HTMLInputElement | null = document.querySelector('#numeroTablaInput');
const calcularTablaBtn: HTMLButtonElement | null = document.querySelector('#calcularTablaBtn');
const tablaDiv: HTMLDivElement | null = document.querySelector('#tablaDiv');

if (numeroTablaInput && calcularTablaBtn && tablaDiv) {
  calcularTablaBtn.addEventListener('click', () => {
    const numero: number = parseInt(numeroTablaInput.value);
    tablaDiv.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
      const resultado: number = numero * i;
      tablaDiv.innerHTML += `${numero} x ${i} = ${resultado}<br>`;
    }
  });
}
