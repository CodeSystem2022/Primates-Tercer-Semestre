let x = 10; // Variable tipo primitiva
console.log(x.length)

//Object
let persona = {
    name: 'Nito',
    surName: 'Saracatungas',
    email: 'nitoals@yahoo.com.ur',
    age: '21',
    fullName: function (){ //Método o función
        return this.name+' '+this.surName;
    }
}

console.log(persona.name);
console.log(persona.surName);
console.log(persona.email);
console.log(persona.age);
console.log(persona.fullName());

let persona2 = {}; //Deben crear un nuevo objeto en memoria
persona2.nombre = 'Linita'
persona2.direccion = 'L123 asdasda'
persona2.telefono = '26047123123'

console.log(persona2.telefono)

console.log(persona['surName']) //Accedemos como si fuera un arreglo

// ForIn
for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}

persona.apellido = 'Sgandurra'; // Cambiamos dinámicamente el valor
delete persona.apellido; // Eliminamos el valor que pusimos mal
console.log(persona.surName)

// Distintas formas de imprimir un objeto
// N° 1: La más sencilla: Concatenar cada valor de cada propiedad
console.log('Formas de imprimir un objeto: 1')
console.log((persona.name+', '+persona.surName))

// N° 2: Ciclo for
console.log('Formas de imprimir un objeto: 2')
for (let namepropiedad in persona){
    console.log(persona[namepropiedad])
}

// N° 3: Función object.value()
console.log('Formas de imprimir un objeto: 3')
let personaArray = Object.values(persona);
console.log(personaArray)

// N° 3: JSON.stringify
console.log('Formas de imprimir un objeto: 4')
let personaString = JSON.stringify(persona);
console.log(personaString)