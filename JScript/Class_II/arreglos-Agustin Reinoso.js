//let autos=new Array('Ferrari','Renault','bmw'); esta es la sintaxis vieja
const autos=['Ferrari','Renault','bmw'];
console.log(autos);
//Recorremos los elementos de un arreglo
console.log(autos[0]);
console.log(autos[2]);
for(let i=0;i<autos.length;i++){
console.log(i+' : '+autos[i]);

}
//modificamos los elementos del arreglo
autos[1]='Volvo';
console.log(autos[1]);
//agregar nuevos valores al arreglo
autos.push('Audi');
console.log(autos);
//otra forma de agregar nuevos valores al arreglo
autos[autos.length]='Porche';
console.log(autos);


//tercera forma de agregar elementos teniendo cuidado!!!!!

autos[5]='Renoult';
console.log(autos);
//como preguntar si es un array o arreglo
console.log(Array.isArray(autos));//devuelve un booleano
console.log(autos instanceof Array);//preguntamos si la variable es una intancia de la clase array
