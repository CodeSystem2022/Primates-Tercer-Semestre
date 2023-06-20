//let persona3 = new Persona('Carla', 'Ponce'); //esto no se debe hacer: Persona is not defined

class Persona {
    //Clase padre
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }

    nombreCompleto() {
        return this._nombre + " " + this._apeliido;
    }
}

class Empleado extends Persona {
    //Clase hija
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }
}

let persona1 = new Persona("John", "Snow");
console.log(persona1.nombre);
console.log(persona1.apellido);
persona1._nombre = "Juan Roman";
persona1._apellido = "Riquelme";
console.log(persona1.nombre);
console.log(persona1.apellido);

let persona2 = new Persona("Calvin", "Klein");
console.log(persona2.nombre);
console.log(persona2.apellido);
persona2._nombre = "Cacho";
persona2._apellido = "Castaña";
console.log(persona2.nombre);
console.log(persona2.apellido);

let empleado1 = new Empleado("Brendan", "Eich", "IT");
console.log(empleado1);
console.log(empleado1.nombreCompleto());
