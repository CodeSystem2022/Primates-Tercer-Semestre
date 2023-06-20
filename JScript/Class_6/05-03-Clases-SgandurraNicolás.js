// let persona3 = new Persona('Pablo', 'Gonzales'); //No se puede acceder antes de inicializar la clase)

class Persona{
    constructor(name, surName) {
        this._name = name;
        this._surName = surName;

    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }


    get surName() {
        return this._surName;
    }

    set surName(surName) {
        this._surName = surName;
    }
}

class Empleado extends Persona{
    constructor(name, surName, department) {
        super(name, surName);
        this._department = department;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }
}

let persona1 = new Persona('Nito', 'Saracatunga')
console.log(persona1.name)
persona1.name = "Wan"
console.log(persona1.name)
//console.log(persona1)
let persona2 = new Persona('Linita', 'Panta')
console.log(persona2.name)
persona2.name = "Andre"
console.log(persona2.name)
//console.log(persona2)

let empleado1 = new Empleado("Wan", "Martinez", "Ventas");
console.log(empleado1)

console.log(empleado1.surName)