//Creacion de Array o arreglos
//let autos = new Array("Ferrari", "Renault", "BMW"); esta es la sintaxis vieja
const autos = [ 'Ferrari', 'Renault', 'BMW' ];
console.log(autos);

//Recorremos los elementos de un arreglo

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i+' : '+autos[i]);
}

// Modificamos los elementos del arreglo
autos[1] = 'Volvo';  // muestra como se reemplaza el valor del arreglo que esta en el lugar [1]
console.log(autos[1]); 

//Agregamos nuevos valore al arreglo
autos.push('Audi'); // Se agrega el elemento al final a la lista de elementos (arreglos)
console.log(autos);

// otras formas de agregar elementos al arreglo
autos[autos.length] = 'Porche';
console.log(autos);

//Tercer forma de agregar elementos teniendo CUIDADO
autos[6] = 'Renault'; //Considerar el numero correcto a la hora de indicarlo dentro de los [] para ocupar memoria de mas
console.log(autos); 

// Como pregntar si es una Array o es un Arreglo
console.log(Array.isArray(autos)); // Devuelve un resultado Booleano V o F
// segunda forma de consultar que es
console.log(autos instanceof Array); //Preguntamos si la variable es una instancia de la clase Array
