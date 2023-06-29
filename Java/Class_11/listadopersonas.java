
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);  
        //Definimos la lista del ciclo while 
        List<Persona> personas = new ArrayList<>();
        //Empezamos con el menú
        var salir = false;
        while(!salir){
            mostrarMenu();
            System.out.println();
        }//Fin del ciclo while 
    }//Fin metodo main
    
    private static void mostrarMenu(){
        //mostramos las opciones
        System.out.print("""
                ******* Listado de Personas ******
                        1. Agregar
                        2. Listar
                        3. Salir
                        """);
        System.out.print("Digite una de las opciones: ");
    }//Fin metodo mostratMenu

    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas) {
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;
        //Revisamor la opcion digitada a traves de un switch
        switch (opcion) {
            case 1 -> {//Agregar una persona a la lista
                System.out.print("Digite el nombre:");
                var nombre = entrada.nextLine();
                System.out.print("Digite el telefono:");
                var tel = entrada.nextLine();
                System.out.println("Digite el correo:");
                var email = entrada.nextLine();
                //creamos el objeto Persona
                var persona = new Persona(nombre, tel, email);
                //Agregamos la persona a la lista
                personas.add(persona);
                System.out.println("La lista tiene: " + personas.size() + " elementos");

            }//Fin caso uno
            case 2 -> {//Listar a las Personas
            System.out.println("Listado de Personas:");
                //Mejoras con lambda y el metodo de referencia
                //personas.forEach((persona) -> System.out.println(persona));
                personas.forEach(System.out::println);

            }//Fin caso 2
            case 3 -> {//Salir del ciclo
                System.out.println("Hasta Pronto...");
                salir = true;
            }// Fin caso 3
            default -> {
                System.out.println("Opcion incorrecta:+opcion");
                //Fin del Switch
                return salir;
            }
        }//Fin del medoto ejecutarOperacion
        return salir;
    }//Fin de la clase ListadoPersonasApp

}
    
}
