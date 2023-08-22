const nFibonacciInput: HTMLInputElement | null = document.querySelector('#nFibonacciInput');
const calcularFibonacciBtn: HTMLButtonElement | null = document.querySelector('#calcularFibonacciBtn');
const fibonacciDiv: HTMLDivElement | null = document.querySelector('#fibonacciDiv');

if (nFibonacciInput && calcularFibonacciBtn && fibonacciDiv) {
  calcularFibonacciBtn.addEventListener('click', () => {
    const n: number = parseInt(nFibonacciInput.value);
    let fibSequence: number[] = [0, 1];

    for (let i = 2; i < n; i++) {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    fibonacciDiv.textContent = `Secuencia de Fibonacci: ${fibSequence.join(', ')}`;
  });
}
