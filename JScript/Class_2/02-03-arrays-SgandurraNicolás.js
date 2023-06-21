// let cars = new Array('Ferrari', 'McLaren', 'Mercedes', 'Porsche') # Sintaxis vieja
const cars = ['Ferrari', 'Mclaren', 'Mercedes', 'Porsche']; // Utilizamos const ya que no se modifica la variable

// Recorrer los elementos de un arreglo.
// console.log(cars[0]);

// Modificar los elementos:
cars[1] = 'Rastrojero'; // McLaren F1

// Primera forma de agregar nuevos items al array
cars.push('Audi');

// Segunda forma de agregar elementos:
cars[cars.length] = 'Subaru';

// Tercera forma de agregar items:
cars[7] = 'Supra'; // Deja los espacios no definidos (interiores) como undefined.

// Para recorrerlo de 1 en 1
for (let i = 0; i < cars.length; i++){
    console.log(i+1 + ' ' + cars[i])
}

// Consultar si es un array
console.log(Array.isArray(cars)); //Arroja true o false según corresponda.

console.log(cars instanceof Array); //Preguntamos si nuestro arreglo pertenece a Arreglos.

