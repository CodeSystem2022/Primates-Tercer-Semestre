//while
let contador=0;
while(contador<3){
console.log(contador);
contador++;
}
console.log("Fin del ciclo while");
//do while
let conteo=0;
do{
console.log(conteo);
conteo++;
}while(conteo<3);
console.log("Fin del ciclo do while");
//for
for(let contando=0;contando<3;contando++){
console.log(contando);
}
console.log("Fin del ciclo for");

//Palabra reservada break
for(let contando=0; contando<=10;contando++){
if(contando%2==0){
   console.log(contando); //muestra todos los pares
   break;
}
}
console.log("Fin de encontrar pares");
//la palabra continue y etiquetas labels
inicio:
for(let contando=0; contando<=10;contando++){
    if(contando%2!==0){
        continue inicio;  //continuar a la siguente iteracion  
    }
    console.log(contando);
    }
    console.log("Fin de continue");
