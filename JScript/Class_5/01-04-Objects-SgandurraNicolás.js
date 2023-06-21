let x = 10; // Variable tipo primitiva
console.log(x.length)

//Object
let persona = {
    name: 'Nito',
    surName: 'Saracatungas',
    email: 'nitoals@yahoo.com.ur',
    age: '21',
    idioma: 'en',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    fullName: function (){ //Método o función
        return this.name+' '+this.surName;
    },
    get nameAge(){ //Método GET
        return this.name+' '+this.age
    },

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

// N° 4: JSON.stringify
console.log('Formas de imprimir un objeto: 4')
let personaString = JSON.stringify(persona);
console.log(personaString)

// N° 5:
console.log('Formas de imprimir un objeto: 5')
console.log(persona.nameAge)

// N° 6:
console.log('Método GET/SET para idiomas.')
console.log(persona.lang)
persona.lang = 'es'
console.log(persona.lang)


function Persona3(name, surName, email){ // Constructor
    this.name = name;
    this.surName = surName;
    this.email = email;
    this.fullName = function (){
        return this.name+' '+this.surName
    }
}
let padre = new Persona3("Nito", "Saracatunga","Nitoals@gm.com")
padre.name = 'Wan'
padre.telefono = '260 4617199'
console.log(padre);
console.log(padre.fullName())

let madre = new Persona3("Lina", "Panta", "LPanta@gm.com")
console.log(madre)
console.log(madre.fullName())
console.log(madre.telefono)

//Diferentes formas de crear objetos
//Caso N° 1
let myObject1 = new Object(); //Opción formal.

//Caso N° 2
let myObject2 = {}; // Forma Recomendada.

//Caso String 1
let myString1 = new String('Oal')
//Caso String 2
let myString2 = 'Oal'

//Caso Num 1
let myNumber1 = new Number(1);
//Caso Num 2
let myNumber2 = 1;

//Caso Boolean1
let myBoolean1 = new Boolean(false);
//Caso Boolean2
let myBoolean2 = false;

//Caso Array1
let myArray1 = new Array();
//Caso Array2
let myArray2 = [];

//Caso Function1
let myFunction1 = new Function();
//Caso Function2
let myFunction2 = function (){}

//Uso de prototype
Persona3.prototype.telefono = '260 4617192'
console.log(padre.telefono)
console.log(madre.telefono)
madre.telefono = '444 4444444'
console.log(madre.telefono)

// Uso de Call
let persona4 = {
    name: 'Wan',
    surName: 'Fesheira',
    fullName2: function (title, telefono){
        return title+': '+this.name+' '+this.surName+' '+telefono
        // return this.name+' '+this.surName
    }
}

let persona5 = {
    name: 'Lina',
    surName: 'Panta',
}

console.log(persona4.fullName2('Ingeniero', '260 4778899'))
console.log(persona4.fullName2.call(persona5, 'Enf', '260 4556644'))

//Método Apply
let arreglo = ['Enf', '260 4778899']
console.log(persona4.fullName2.apply(persona5, arreglo));