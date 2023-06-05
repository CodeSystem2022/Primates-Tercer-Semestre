miFuncion(8, 2); //Esto se le conoce como hosting

function miFuncion(a, b){
    //console.log("Sumamos: "+ (a+b))
    return a + b;
}
//Llamando la funcion
miFuncion(5, 4);

let resultado = miFuncion(6, 7);
console.log(resultado);

//Declaramos una funcion de tipo expresion o anonima
let x = function(a, b){return a + b};//Necesita cierre con punto y coma
resultado = x(5, 6);//Al llamarla se pone la variable y parentesis
console.log(resultado);

//Funciones de tipo self y invoking
(function(a, b){
    console.log("Ejecutando la funcion: "+ (a + b))
})(9, 6);

console.log(typeof miFuncion);
function miFuncionDos(a, b){
   console.log(arguments.length);
}
miFuncionDos(5, 7, 3, 6);

//toString
var miFuncionTexto = mifuncionDos.toString()
console.log(miFuncionTexto);

//Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7); //Asignamos el valor a una variable
console.log(resultado);

//Funcion tipo expresion
Let sumar = function(a = 4, b = 8){
    console.log(arguments[0]);//muestre el parametro de a 
    console.log(arguments[1]);//muestra el parametro de b
    return a + b + arguments[2];
}
resultado = sumar(3, 5);
console.log(resultado);

//Sumar todos los argumentos
Let respuesta = sumarTodo(5, 4, 13, 10, 9)
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(Let i = 0; i < arguments.length; i++){
        suma += arguments[i];//arguments es para arreglos
    }
    return suma;
}

//Tipo primitivos
let x = 10;
function cambiarValor(a){
    a = 20;
}
cambiarValor(x);
console.log(k);

const persona = {
    nombre: 'Juan',
    apellido: 'Lopez'
}
console.log(persona);
function cambiarValorObjeto(p1){
    p1.nombre = 'Ignacio';
    p1.apellido = 'Perez'
}
cambiarValorObjeto(persona);
console.log(persona);
