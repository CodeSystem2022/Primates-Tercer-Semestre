// Clase 3 JAVA - ForEach 25/04/2023

package test;
import domain.Persona;
/**
 * @author Valentino Patané
 */
public class TestForEach {
    public static void main(String[] args) {
        // Creación de un arreglo de enteros:
        int edades[] = {5, 6, 8, 9}; // Sintaxis resumida

        // for (int i = 0; i < edades.length; i++) {  // For clásico
        for (var edad : edades) { // Sintaxis del For Each
            System.out.println("edad = " + edad);
        }

        // Creación de un arreglo de objetos llamado Persona:
        Persona personas[] = {new Persona("Julian"), new Persona("Dibu"), new Persona("Cuti")};

        // For Each para recorrer el arreglo de objetos llamado Persona:
        for (Persona persona : personas) {
            System.out.println("persona = " + persona);
        }


    }
}
