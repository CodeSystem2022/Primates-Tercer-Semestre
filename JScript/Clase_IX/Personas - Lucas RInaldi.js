class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido; 
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}

class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    
    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;}

}

class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fecharegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fecharegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fecha(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this.idCliente} ${this._fechaRegistro}`;
    }
}

//Prueba clase Persona
let persona1 = new Persona('Jorgito', 'Martinez', 32);
console.log(persona1.toString());
let persona2 = new Persona('Pedro','Gonzalez',22);
console.log(persona2.toString());

//Prueba clase Empleado
let empleado1 = new Empleado('Robert','De Niro',18,5000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Brad','Pitt',30,7000);
console.log(empleado2.toString());

//Prueba clase Cliente
let cliente1 = new Cliente('Johnny', 'Walker', 29, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Philipp','Plain',22,new Date());
console.log(cliente2.toString());