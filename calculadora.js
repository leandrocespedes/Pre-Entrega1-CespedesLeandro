function sumar(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
  }
  
  function restar(valor1, valor2) {
    const resultado = valor1 - valor2;
    return resultado;
  }
  
  
  function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
  }
  
  function dividir(valor1, valor2) {
    const resultado = valor1 / valor2;
    return resultado;
  }
  
  
  function calculadora() {
    const valor1 = parseInt(prompt("Ingrese el primer valor:"));
    const valor2 = parseInt(prompt("Ingrese el segundo valor:"));
    const operacion = prompt("¿Qué operación querés hacer? (+ - * /)");
  
    switch (operacion) {
      case "+":
        alert("El resulado de la suma es " + sumar(valor1, valor2));
        break;
      case "-":
        alert("El resultado de la resta es " + restar(valor1, valor2));
        break;
      case "*":
        alert("El resultado de la multiplicación es " + multiplicar(valor1, valor2));
        break;
      case "/":
        alert("El resultado de la división es " + dividir(valor1, valor2));
        break;
      default:
        alert("La operación ingresada es inválida.");
    }
  }