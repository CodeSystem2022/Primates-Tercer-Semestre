let persona3 = new Persona('Carla', 'Ponce');

class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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

    nombreCompleto(){
        return this._nombre+' '+this._apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento;
    }
}

let persona1 = new Persona('Martin', 'Perez');
console.log(persona1.nombre); Martin
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);  Carlos
//console.log(persona1);
let persona2 = new Persona('Carlos', 'Laara');
console.log(persona2.nombre); Carlos
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);  Laura
//console.log(persona2);

let empledo1 = new Empledo('Maria', 'Gimenez', 'Sistemas');
console.log(Empleado1);
console.log(empleado1.nombreCompleto());