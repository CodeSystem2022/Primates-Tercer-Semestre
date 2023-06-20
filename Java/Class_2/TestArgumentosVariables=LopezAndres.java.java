package Test;
public class TestArgumentosVariables {
    public static void main(String[] args) throws Exception {
        imprimirNumeros(3, 4, 5);
        imprimirNumeros(1, 2);
        variosParametros("Andres", 5,6,7,9);
    }

    private static void variosParametros(String nombre,int multiplo1, int multiplo2 ,int ...numeros){
        System.out.println("Nombre: "+nombre);
        imprimirNumeros(numeros);
        int numero1 = numeros[0] * multiplo1;
        int numero2 = numeros[1] * multiplo2;

        System.out.println("Multiplicacion 1: "+numero1);
        System.out.println("Multiplicacion 2: "+numero2);
    }

    private static void imprimirNumeros(int ...numeros){
        for(int i = 0; i < numeros.length; i++){
            System.out.println("Elementos: "+numeros[i]);
        }
    }
}


