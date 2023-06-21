// let persona3 = new Persona('Pablo', 'Gonzales'); //No se puede acceder antes de inicializar la clase)
class Persona{ //Clase Padre

    static contPersonas = 0;
    //email = 'Default'

    static get MaxOBJ(){ // Simula una ctte.
        return 5;
    }

    constructor(name, surName) {
        this._name = name;
        this._surName = surName;
        if (Persona.contPersonas < Persona.MaxOBJ){
            this._IdPersona = Persona.contPersonas++
        }

        console.log('Se incrementa el contador: '+Persona.contObjectsPersona);
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

    fullName(){
        return this._IdPersona+' '+this._name+' '+this._surName
    }

    toString(){ // Regresa un string aplicando un polimorfismo
        return this.fullName()
    }

    static saludar(){
        console.log('Wenas tardes desde static');
    }

    static saludos(){
        console.log(persona.name+' '+persona.surName);
    }
}
class Empleado extends Persona{ // Clase Hija
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

    // Sobre escritura
    fullName(){
        return super.fullName()+' '+this._department
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
console.log(empleado1);

console.log(empleado1.fullName());


// Object.prototype.toString
console.log(empleado1.toString());
console.log(persona2.toString())
//persona1.saludar() // No se utiliza desde el objeto
Persona.saludar()
//Persona.saludos(persona1)

Empleado.saludar()
//Empleado.saludos(empleado1)

// console.log(persona2.contObjectPersona)
console.log(Persona.contObjectsPersona)
console.log(Empleado.contObjectsPersona)

//console.log(persona2.email) // Se adjudica automáticamente a los 2 (Objetos y clase)
//console.log(Persona.email) // Un definido
console.log(persona2.toString())
console.log(empleado1.toString())
console.log(Persona.contPersonas)
let persona3 = new Persona('Doña', 'Marta')
console.log(persona3.toString())

console.log(Persona.MaxOBJ)
Persona.MaxOBJ = 7; // No se puede modificar
console.log(Persona.MaxOBJ) // Sigue mostrando 5
let persona4 = new Persona('Franco', 'Waddf');
console.log(persona4.toString())
let persona5 = new Persona('Guille', 'Roman');
console.log(persona5.toString())