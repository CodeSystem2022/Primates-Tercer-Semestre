let x=10;// variable de tipo primitiva
console.log(x.length);
console.log('tipos primitivos');
let personas={//es un objeto
nombre:'Carlos',
apellido:'Gil',
email:'cgil@gamil.com',
edad: 30,
nombreCompleto: function(){//metodo
    return this.nombre+' '+this.apellido;
}
}

console.log(personas.nombre);
console.log(personas.apellido);
console.log(personas.email);
console.log(personas.edad);
console.log(personas);
console.log(personas.nombreCompleto());
console.log('Ejecutando con un objeto');

let personas2= new Object();
personas2.nombre='Juan';
personas2.direccion='Salada 14';
personas2.telefono='56465465163165';
console.log('Creamos un nuevo objeto');
console.log(personas2.telefono);
console.log(personas['apellido']);
console.log('Usamos el ciclo for in');
for(propiedad in personas){
    console.log(propiedad);
    console.log(personas[propiedad]);
}
console.log('cambiamos y eliminamos un error')
personas.apellida='Betancud';//creo por error una propiedad
delete personas.apellida;//borro el error
console.log(personas);
//distinta formas de imprimir un objeto
//numero 1: mas sencilla : concatenar cada valor de cada propiedad
console.log('distinta formas de imprimir un objeto: forma 1');
console.log(personas.nombre+', '+personas.apellido);
//numero 2: a traves del ciclo for in
console.log('distinta formas de imprimir un objeto: forma 2');
for(nombrePropiedad in personas){
    console.log(personas[nombrePropiedad]);
}
// nuermo 3 : la funcion object.valvues()
console.log('distinta formas de imprimir un objeto: forma 3');
let pertsonaArray= Object.values(personas);
console.log(pertsonaArray);

// Numero 4: Utilizaremos el metodo JSON.stringify
console.log('distinta formas de imprimir un objeto: forma 4 a mi entender la mas importante');
let personaString = JSON.stringify(personas);
console.log(personaString);
