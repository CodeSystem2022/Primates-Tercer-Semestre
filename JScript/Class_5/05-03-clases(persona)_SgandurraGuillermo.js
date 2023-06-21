class Persona {
    constructor(nombre, apellido) {
      this._nombre = nombre;
      this._apellido = apellido;
    }
  
    get apellido() {
      return this._apellido;
    }
  
    set apellido(nuevoApellido) {
      this._apellido = nuevoApellido;
    }
  }
  
  // Crear una instancia de Persona
  const persona = new Persona("John", "Doe");
  
  // Obtener el apellido usando el método get
  console.log(persona.apellido); // Imprime "Doe"
  
  // Modificar el apellido usando el método set
  persona.apellido = "Smith";
  
  // Obtener el nuevo apellido usando el método get
  console.log(persona.apellido); // Imprime "Smith"
  