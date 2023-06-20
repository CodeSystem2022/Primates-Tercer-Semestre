import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class PersonsApp {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        List<Persona> personas = new ArrayList<>();
        // Iniciando menu
        var exit = false;
        while (!exit){
            showMenu();
            try{
                exit = executeOperation(input, personas);
            }catch (Exception ex){
                System.out.println("Ocurrió un error: "+ex.getMessage());
            }
            System.out.println();
        } // Fin del while
    } // Fin del main

    private static void showMenu(){
        System.out.print("""
                ****** Listado de personas ******
                1- Agregar
                2- Listar
                3- Salir
                """);
        System.out.print("Ingrese una de las opciones: ");
    } // Fin de mostrar menu

    private static boolean executeOperation(Scanner input, List<Persona> personas){
        var operation = Integer.parseInt(input.nextLine());
        var exit = false;
        // Revisamos la opción digita a través de un switch
        switch (operation){
            case 1 -> { // Agregar una persona a la lista
                System.out.print("Digite el nombre de la persona: ");
                var name = input.nextLine();
                System.out.print("Digite el teléfono de la persona: ");
                var mobile = input.nextLine();
                System.out.print("Digite el email de la persona: ");
                var email = input.nextLine();

                // Creamos el objeto Persona
                var persona = new Persona(name, mobile, email);
                // Agregamos la persona a la lista
                personas.add(persona);
                System.out.println("La lista tiene "+personas.size()+" elementos");
            }
            case 2 -> { // Listar personas
                System.out.println("Listado de personas: ");
                // Mejora usando lambda y método de referencias
                // personas.forEach((persona) -> System.out.println(persona));
                personas.forEach(System.out::println);
            }
            case 3 -> {
                System.out.println("-=Adios=-");
                exit = true;
            }
            default -> System.out.println("Valor invalido");

        } // Fin del Switch
        return exit;
    } // Fin del método executeOperation
}
