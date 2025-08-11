function agregarALaPantalla(value) {
    document.getElementById('pantalla').value += value;
  }
  
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
  }

function borrar() {
    const valorPantalla = document.getElementById('pantalla').value;  // toma el texto actual
    const nuevoValor = valorPantalla.slice(0, -1);                   // elimina el último carácter
    document.getElementById('pantalla').value = nuevoValor;          // actualiza la pantalla
}


function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
  }

  