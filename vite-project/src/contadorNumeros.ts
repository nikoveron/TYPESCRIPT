const rangoInicioInput: HTMLInputElement | null = document.querySelector('#rangoInicioInput');
const rangoFinInput: HTMLInputElement | null = document.querySelector('#rangoFinInput');
const contarParesImparesBtn: HTMLButtonElement | null = document.querySelector('#contarParesImparesBtn');
const paresDiv: HTMLDivElement | null = document.querySelector('#paresDiv');
const imparesDiv: HTMLDivElement | null = document.querySelector('#imparesDiv');

if (rangoInicioInput && rangoFinInput && contarParesImparesBtn && paresDiv && imparesDiv) {
  contarParesImparesBtn.addEventListener('click', () => {
    const inicio: number = parseInt(rangoInicioInput.value);
    const fin: number = parseInt(rangoFinInput.value);
    let paresCount = 0;
    let imparesCount = 0;

    for (let i = inicio; i <= fin; i++) {
      if (i % 2 === 0) {
        paresCount++;
      } else {
        imparesCount++;
      }
    }

    paresDiv.textContent = `Números pares: ${paresCount}`;
    imparesDiv.textContent = `Números impares: ${imparesCount}`;
  });
}
