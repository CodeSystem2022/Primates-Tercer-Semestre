//While
let conteoWhile = 0;
while(conteoWhile < 3){
    console.log(conteoWhile);
    conteoWhile++;

}
console.log("End While...");

//DoWhile
let conteoDoWhile = 0;
do{
    console.log(conteoDoWhile)
    conteoDoWhile++;
}while(conteoDoWhile < 3);
console.log("End DoWhile...")

//For
for (let conteoFor= 0, c= 0 ; conteoFor < 3 ; conteoFor++){
    console.log(conteoFor)
}
console.log("End For...")

//Break
for (let conteoBreak= 0 ; conteoBreak <= 10 ; conteoBreak++){
    if (conteoBreak % 2 === 0){
        console.log(conteoBreak)
    }
    if (conteoBreak === 6){
        break
    }
}
console.log("End Break...")

//Continue
for (let conteoContinue= 0 ; conteoContinue <= 10 ; conteoContinue++){
    if (conteoContinue % 2 !== 0) {
        continue;
    }
    console.log(conteoContinue)
}
console.log("End Continue...")

//Labels
start:
for (let conteoContinue= 0 ; conteoContinue <= 10 ; conteoContinue++){
    if (conteoContinue % 2 !== 0) {
        break start;
    }
    console.log(conteoContinue)
}
console.log("End inicio...")