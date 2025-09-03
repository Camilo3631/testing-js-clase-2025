// Funciónes matématicas

// Función de suma
function sum(a, b) {
  return a + b;
}

// función para multiplicación
function multiply(a, b) {
  return a * b;
}

// función para division
function divide(a, b) {
  // Si el denominador es === 0 retorna null
  if (b === 0) {
    return null;
  }

  return a / b;
}

module.exports = {
  sum,
  multiply,
  divide,
};
