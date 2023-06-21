// Clase 3 JAVA - ForEach 25/04/2023

package domain;
/**
 *
 * @author Valentino Patané
 */
public class Persona {
    private String nombre;

    // Constructor
    public Persona(String nombre) {
        this.nombre = nombre;
    }

    // Getters y Setters
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    // Método toString
    // Sirve para imprimir el objeto en una cadena de texto (String)
    @Override // Sobreescritura del método toString
    public String toString() {
        return "Persona{" + "nombre=" + nombre + '}';
    }

}
