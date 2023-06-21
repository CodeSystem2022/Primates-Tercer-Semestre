//Diferentes formas de crear objetos:
//Caso 1
let miObjeto = new Object();// Esta es una opcion formal
//Caso 2
let miObjeto2 = {}; //Esta opcion es breve y recomendada

//caso String 1
let miCadena1 = new String("Hola"); //sintaxis fromal
//caso String 2
let miCadena2 = "Hola"; // Esta es la sintaxis simplificada y recomendada

//caso con numeros 1 
let miNumero = new Number(1); // Es formal no recomendable
//caso con numeros 2 
let miNumero2 = 1;

//caso Boolean 1
let miBoolean1 = new Boolean(false); //Formal
//caso boolean 2
let miBoolean2 = false; //Sintaxis recomendada

//caso Arreglos 1
let miArreglo = new Array(); //Formal
//caso Arreglos 2
let miArreglo2 = []; //Sintaxis simplificada

//caso function 1
let miFuncion = new function(){}; // Todo despues de new es considerado objeto
//caso function 2
let miFuncion2 = function(){}; // notacion simplificada y recomendada