//Esto no se permite hacer antes de la clase
// let persona3=new Persona('Carla','Ponce');
class Persona {//Clase padre

static contadorPersonas = 0;//Atributo estatico
//email = 'Valor default email';//Atributo no estatico

static get MAX_OBJ(){// este metodo simula una constante 
return 5;

}
constructor(nombre,apellido){
    this._nombre=nombre;
    this._apellido=apellido;
    if(Persona.contadorPersona<Persona.MAX_OBJ){
        this.idPersona = ++Persona.contadorPersonas;
    }
    else {
        console.log('se ha superado el maximo de objetos permitidos');
    }
    Persona.contadorObjetosPersonas++;
    this.idPersona=++Persona.contadorPersonas;
    //console.log('se incrementa el contador'+Persona.contadorObjetosPersonas);
}
get nombre(){
    return this._nombre;
}
set nombre(nombre){
    this._nombre=nombre;
}
get apellido(){
    return this._apellido;
}
set apellido(apellido){
    this._apellido=apellido;
}
nombreCompleto(){
    return this.idPersona+' '+this._nombre+' '+this._apellido;
}
toString(){//Regresa un String
return this.nombreCompleto();
}

static saludar(){
    console.log('saludos desde este metodo estatico')
}

static saludar2(persona){
console.log(persona.nombre+' '+Persona.apellido)
}

}

class Empleado extends Persona{//clase hija
constructor(nombre,apellido,departamento){
    super(nombre,apellido);
    this._departamento=departamento;
}
get departamento(){
return this._departamento;
}
set departamento(departamento){
    this._departamento=departamento;
}
//Sobreescritura el metodo de la clase padre (Object)
nombreCompleto(){
    //se aplica el polimorfismo que significa=multiples dormas en tiempo de ejecucion
    //el metodo que se ejecuta depende si es una referencia de tipo padre o hija
    return super.nombreCompleto()+', '+this._departamento;

}
}

let persona1= new Persona('Martin','Perez');
console.log(persona1.nombre);
console.log(persona1.apellido);
persona1.nombre='Juan Carlos';
console.log(persona1.nombre);
//console.log(persona1);
let persona2=new Persona('Carlos','Lara');
console.log(persona2.nombre);
console.log(persona2.apellido);
persona2.nombre='Maria Laura';
console.log(persona2.nombre);
//console.log(persona2);

let empleado1=new Empleado('Maria','Gimenez','Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString
console.log(empleado1.toString());
console.log(persona1.toString());

// persona1.saludar(); no se utiliza desde el objeto 
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//console.log(persona1.contadorObjetosPersonas);
console.log(Persona.contadorObjetosPersonas);   
console.log(Empleado.contadorObjetosPersonas);

console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
//console.log(Persona.email) no puede acceder desde la clase 
console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);

let Persona3 = new Persona('carla','Pertossi');
console.log(Persona3.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);
// Persona.MAX_OBJ = 10; esto no se puede xq no tenemos un sett para 
//modificarlo, solo tenemos un get xq lo queremos como metodo estatico
console.log(Persona.MAX_OBJ);

let persona4 = new Persona('franco','Daiz');
console.log(persona4.toString());

let persona5 = new Persona('liliana','paz');
console.log(persona5.toString());
