// Se puede llamar antes o luego de definirla
myFunction(2,2)

function myFunction(a, b){
    // console.log('Sumamos: '+ (a + b));
    return a + b
}

function myFunctionPlus(a, b, c){
    // console.log('Sumamos: '+ (a + b));
    return -b-((((b^2)-4*a*c)^(1/2))/(2*a))
}

function myFunctionLess(a, b, c){
    // console.log('Sumamos: '+ (a + b));
    return -b+((((b^2)-4*a*c)^(1/2))/(2*a))
}


// Llamamos a la función
myFunction(4,8)

let resultPlus = myFunctionPlus( 6,4,9)
console.log(resultPlus)
let resultLess = myFunctionLess(6,4,9)
console.log(resultLess)


// Declaramos otra función de tipo expresión
let x = function (a, b){return a+b}; // Necesita estar cerrada con punto y coma
result = x(5,6)
console.log(result);


// Funciones de tipo self y invoking
(function (a,b){
    console.log('Ejecutando la función: '+(a + b));
})(9,7); // Solo se puede llamar una sola vez


function myFunctionImp(a, b){
    console.log(arguments);
}
myFunctionImp(7,8)
console.log(typeof(myFunction()));


// toString
const myFunctionText = myFunctionImp.toString();
console.log(myFunctionText);


//Functions Arrow
const addFunctionArrow = (a, b) => a + b; //Con const podemos modificar luego, con let no nos deja
console.log(addFunctionArrow(6,4));

let add = function (a = 8,b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b + arguments[2];
}
results = add(4,6, 8);
console.log(results);
add(777,3);


let rta = addAll(5,6,7,8);
console.log(rta)

function addAll(){
    let suma = 0
    for (i = 0;i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma
}


// Primitivos
let y = 10
function changeValue(a){ // Solo cambio adentro
    a = 20;
}
changeValue(y)
console.log(y)


const person = {
    name: 'Wan',
    surname: 'Fesheira',
    age: '21'
}
function changeValueObject(p1){ // Con esto si cambio la variable afuera
    p1.name = 'Wan i';
    p1.surname = 'Bosi';
}

changeValueObject(person)
console.log(person)