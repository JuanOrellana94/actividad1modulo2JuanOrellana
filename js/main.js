// EJERCICIO 1: Crear una función que en base a la
// edad que ingreso el usuario devolver un 
// mensaje si la persona es mayor de edad o no.
// Utilizar para la condición el operador ternario.

console.log("Ejercicio 1");

const verificarEdad = (edad) => {
    if (edad >= 18) {
        return "Mayor de edad";
    } else {
        return "Menor de edad";
    }
}


let edadUsuario = 16;
console.log(verificarEdad(edadUsuario));

//EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende 
//de lo siguiente:  
//• Examen =20% 
//• tareas = 40% 
//• asistencia = 10% 
//• investigación = 30% 
//Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. 

console.log("Ejercicio 2")

function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
 
  const notaTotal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);

  console.log("Nombre: " + nombre);
  console.log("Carnet: " + carnet);
  console.log("Nota Final: " + notaTotal);
}

calcularNotaFinal(
  "Juan DIego", 
  "123456", 
  85,  
  90,  
  95,  
  80   
);

///EJERCICIO 3: 
//Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
//Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y 
//aumento. Deberá demostrar los datos del empleado y el aumento salarial. 
// A = 15, B = 30%, C = 10%, D = 20%

console.log("Ejercicio 3");

const calcularAumento = (nombre, salario, categoria) => {
    let aumentoPorcentaje;

    if (categoria === "A") {
        aumentoPorcentaje = 0.15;
    } else if (categoria === "B") {
        aumentoPorcentaje = 0.30;
    } else if (categoria === "C") {
        aumentoPorcentaje = 0.10;
    } else if (categoria === "D") {
        aumentoPorcentaje = 0.20;
    } else {
        console.log("Categoría no valida.");
        return;
    }


    const aumento = salario * aumentoPorcentaje;
    const nuevoSalario = salario + aumento;


    console.log("Nombre: " + nombre);
    console.log("Categoría: " + categoria);
    console.log("Salario base: $" + salario);
    console.log("Aumento: $" + aumento);
    console.log("Nuevo salario: $" + nuevoSalario);
}

calcularAumento("Juan Diego", 1000, "D");

// EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, 
//calcular cual número es el mayor y devolverlo. 
console.log("Ejercicio 4");

const obtenerMayor = (numero1, numero2) => {
  if (numero1 > numero2) {
    return numero1 + " es mayor.";
  } else if (numero2 > numero1) {
    return numero2 + " es mayor.";
  } else {
    return "Números son iguales.";
  }
}

// Ejemplo de uso:
console.log(obtenerMayor(5, 6)); 

//EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular: 
//Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el 
//coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE 
//el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se 
//aplicara en base a lo que selecciono el usuario. 
console.log("Ejercicio 5");

const calcularDescuento = () => {
      const coche = document.getElementById("coche").value;
      const precio = parseFloat(document.getElementById("precio").value);
      let descuento = 0;
      let nombreCoche = "";

      if (coche === "FIESTA") {
        descuento = 0.05;
        nombreCoche = "Ford Fiesta";
      } else if (coche === "FOCUS") {
        descuento = 0.10;
        nombreCoche = "Ford Focus";
      } else if (coche === "ESCAPE") {
        descuento = 0.20;
        nombreCoche = "Ford Escape";
      }

      const montoDescuento = precio * descuento;
      const precioFinal = precio - montoDescuento;

      document.getElementById("resultado").innerHTML = `Coche seleccionado: <strong>${nombreCoche}</strong><br>
        Descuento aplicado: <strong>${(descuento * 100)}%</strong><br>
        Precio final con descuento: <strong>$${precioFinal}</strong>`;
}

//EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando 
//en cuenta lo siguiente:  
//Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
//descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
//es Puerto el Triunfo el descuento será del 15%:
console.log("Ejercicio 6");

const calcularDescuentoViaje = (origen, destino, precio) => {
  
  let descuento = 0;
  origenIf = origen.toLowerCase();
  destinoSwitch = destino.toLowerCase(); 

  if (origenIf === "palma") {
    switch (destinoSwitch) {
      case "la costa del sol":
        descuento = 0.05;
        break;
      case "panchimalco":
        descuento = 0.10;
        break;
      case "puerto el triunfo":
        descuento = 0.15;
        break;
      default:
        console.log("Destino sin descuento.");
        break;
    }
  } else {
    console.log("Otro origen");
    return;
  }

  let montoDescuento = precio * descuento;
  let precioFinal = precio - montoDescuento;

  console.log("Origen: " + origen);
  console.log("Destino: " + destino);
  console.log("Descuento aplicado: " + (descuento * 100) + "%");
  console.log("Precio final con descuento: $" + precioFinal);
}

// Ejemplo de uso:
calcularDescuentoViaje("Palma", "Panchimalco", 100);