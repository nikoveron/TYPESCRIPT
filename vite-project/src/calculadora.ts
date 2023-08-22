const numero1Input: HTMLInputElement | null = document.querySelector('#numero1Input');
const numero2Input: HTMLInputElement | null = document.querySelector('#numero2Input');
const operacionSelect: HTMLSelectElement | null = document.querySelector('#operacionSelect');
const resultadoDiv: HTMLDivElement | null = document.querySelector('#resultadoDiv');

if (numero1Input && numero2Input && operacionSelect && resultadoDiv) {
  numero1Input.addEventListener('input', calcular);
  numero2Input.addEventListener('input', calcular);
  operacionSelect.addEventListener('change', calcular);

  function calcular() {
    if (numero1Input && numero2Input && operacionSelect && resultadoDiv) {
      const numero1: number = parseFloat(numero1Input.value);
      const numero2: number = parseFloat(numero2Input.value);
      const operacion: string = operacionSelect.value;
      let resultado: number;

      switch (operacion) {
        case 'suma':
          resultado = numero1 + numero2;
          break;
        case 'resta':
          resultado = numero1 - numero2;
          break;
        case 'multiplicacion':
          resultado = numero1 * numero2;
          break;
        case 'division':
          resultado = numero1 / numero2;
          break;
        default:
          resultado = NaN;
      }

      resultadoDiv.textContent = `Resultado: ${isNaN(resultado) ? 'Operación no válida' : resultado}`;
    }
  }
}
