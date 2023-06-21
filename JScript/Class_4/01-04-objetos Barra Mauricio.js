let x = 10; //variable de tipo primitiva 
console.log(x.length);  undefined
console.log('Tipos primitivos');
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30,
    nombreCompleto: function() {//metodo o funcion en JavaScript
        return this.nombre+' '+this.apellido;
    }
}

console.log(persona.nombre); Carlos
console.log(persona.apellido); Gil
console.log(persona.email); 
console.log(persona.edad); 30
console.log(persona);
console.log(persona.nombreCompleto()); Gil
console.log('Ejecutando con un objeto') 
let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '5492618282821';
console.log(persona2.telefono); 5492618282821
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); //Accedemos como si fuera un arreglo Gil

//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona)
    console.log(propiedad); nombre, apellido,email, edad, nombreCompleto
    console.log(persona[propiedad]); Carlos. Gil, 30,

console.log('cambiamos y eliminamos un error');
persona.apellido = 'Bentacud';
delete persona.apellido; //Eliminamos el error
console.log(persona);

