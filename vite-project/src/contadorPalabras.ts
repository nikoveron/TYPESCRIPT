const oracionInput: HTMLInputElement | null = document.querySelector('#oracionInput');
const contadorDiv: HTMLDivElement | null = document.querySelector('#contadorDiv');

if (oracionInput && contadorDiv) {
  oracionInput.addEventListener('input', () => {
    const oracion: string = oracionInput.value;
    const palabras: string[] = oracion.split(" ").filter(word => word !== "");
    const cantidadPalabras: number = palabras.length;
    contadorDiv.textContent = `La cantidad de palabras en la oración es: ${cantidadPalabras}`;
  });
}
