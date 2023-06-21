import java.util.Scanner;

public class CalculadoraUTN {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        while (true){
            ShowMenu();
            System.out.print("Que operación desea realizar?: ");

            try {
                var operation = Integer.parseInt(input.nextLine());
                if (operation >= 1 && operation <= 4){
                    Operator(operation, input);
                }//Fin if
                else if (operation == 5) {
                    System.out.println("Hasta la próxima.");
                    break;
                }
                else System.out.println("Opción errónea: ("+operation+')');
                System.out.println();
            } catch (Exception error) { //End try
                System.out.println("Ocurrió un error: ("+error.getMessage()+')');
                System.out.println();
            } //Fin catch
        }// Fin while
    }//Fin psvm

    private static void ShowMenu() {
        System.out.println("****** Calculadora ******");
        System.out.println("""
                1- Suma
                2- Resta
                3- División
                4- Multiplicación
                5- Salir
                """); //Menu
    }

    private static void Operator(int operation, Scanner input){
        System.out.print("Ingrese el valor de 'x'");
        var x = Double.parseDouble(input.nextLine());
        System.out.print("Ingrese el valor de 'y'");
        var y = Double.parseDouble(input.nextLine());

        double result;
        switch (operation){
            case 1 -> {
                result = x + y;
                System.out.println("result = " + result);
            }
            case 2 -> {
                result = x - y;
                System.out.println("result = " + result);
            }
            case 3 -> {
                result = x / y;
                System.out.println("result = " + result);
            }
            case 4 -> {
                result = x * y;
                System.out.println("result = " + result);
            }
            default -> System.out.println("Opción errónea ("+operation+')');

        }// Fin Switch
    }
}
