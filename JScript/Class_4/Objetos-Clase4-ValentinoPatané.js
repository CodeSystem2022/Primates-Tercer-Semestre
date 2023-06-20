/*
La diferencia entre los tipos primitivos y los objetos
es que los objetos tienen metodos (o funcion) y propiedades
*/

// Creamos primitivo
let x = 10; // (number)
console.log(typeof x);

//Creamos Objeto
let persona = {
    nombre: "carlos",
    apellido: "gil",
    email: "cgil@mail.com",
    edad: 35,
    idioma: "ES",
    // Agregando metodos a nuestros objetos
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    },
    //Creando metodos get dentro del objeto
    get nombreEdad() {
        // Añadiendo metodo get en nuestra variable
        return this.nombre + " edad: " + this.edad;
    },
    get lang() {
        return this.idioma.toUpperCase();
    },

    //Creando metodo set
    set lang(lang) {
        this.idioma = lang.toUpperCase(); // Convierte a mayus
    },
};
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona.nombreCompleto()); //No olvidarse los ()

// Creamos objeto de otra forma
let persona2 = new Object();
persona2.name = "Homero";
persona2.direccion = "SiempreVerde 123";
persona2.telefono = "116641516";

console.log(persona2.name);
console.log(persona["apellido"]);

for (propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

//Agregar o eliminar propiedades de los objetos

persona.segundonombre = "Pepe"; // Agregamos
console.log(persona);

delete persona.segundonombre; // Eliminamos
console.log(persona);

//Formas de imprimir un objeto

console.log(persona.nombre + " " + persona.apellido); //Una por una vamos sumando

//Numero 2: con un For in
for (p in persona) {
    console.log(persona[p]);
}

// Numero 3: funcion Object.values() y mostramos variable array con los datos
let personaArray = Object.values(persona);
console.log(personaArray);
console.log(persona);

// Numero 4: utilizando metodo JSON.stringify
let personaString = JSON.stringify(persona);
console.log(personaString);

// Metodos get: get es obtener
//Previamente añadimos el metodo get dentro del objeto
console.log(persona.nombreEdad); // No hace falta los parentesis ahora
console.log(persona.lang);

// Metodo set: para modificar nuestro objeto
persona.lang = "en";
console.log(persona.lang);

//CONSTRUCTORES: funcion especial, utiliza palabra new. Necesitamos tener creada la funcion que actua con el new

function Persona3(nombre, apellido, email) {
    // constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    //Creamos un metodo dentro del metodo constructor
    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    };
}

let padre = new Persona3("Lio", "Messi", "messi10@mail.com");
console.log(typeof padre);
console.log(typeof Persona3);
console.log(padre);
padre.nombre = "Luis";
console.log(padre);

let madre = new Persona3("Mia", "Miga", "miamiga@mail.com");
console.log(madre);
console.log(madre.nombreCompleto());

// Otras formas de crear objetos

let miObjeto = new Object(); //Formal
let miObjeto2 = {}; // Recomendada

let miString = new String(); //formal
let miString2 = "HOla"; //recomendada

let miNumber = new Number(1); // formal
let miNumber2 = 2; // recomendad

let miBoolean = new Boolean(true); // formal
let miBoolean2 = false; //recomendada

let miArreglo = new Array(); //formal
let miArreglo2 = []; // recomendada

let miFuncion = new (function () {})(); // Todo despues de new es considerado objeto
let miFuncion2 = function () {}; // recomendada

// USO DE PROTOTYPE: ingresa una propiedad para todos los objetos creados con el constructor
padre.telefono = "1123186919";
console.log(padre);
console.log(madre.telefono); // propiedad no se definio aca

Persona3.prototype.telefono = "11111111";
console.log(padre);
console.log(madre.telefono);
madre.telefono = "1164635335";
console.log(madre);

// USO DEL METODO CALL: hacer uso de metodos de otros objetos

let persona4 = {
    nombre: "John",
    apellido: "Doe",
    nombreTituloTelefono: function (titulo, telefono) {
        return (
            titulo + ": " + this.nombre + " " + this.apellido + " " + telefono
        );
    },
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    },
};

let persona5 = {
    nombre: "Esteban",
    apellido: "Quito",
};

console.log(persona4.nombreTituloTelefono("Licenciado", "11112222333"));
console.log(
    persona4.nombreTituloTelefono.call(persona5, "Ingeniero", "444455556666")
);

// METODO APPLY: la diferencia con el call es como se pasan los argumentos. Arreglos en apply
console.log(persona4.nombreCompleto.apply(persona5));

let arreglo = ["Medico", "11545554656"];
console.log(persona4.nombreTituloTelefono.apply(persona5, arreglo));
