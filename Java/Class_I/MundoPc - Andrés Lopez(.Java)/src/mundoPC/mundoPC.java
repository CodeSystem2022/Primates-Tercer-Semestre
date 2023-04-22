package mundoPC;

import arComSystem2023MundoPc.*;

public class mundoPC {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 21);
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Sonido sonidoHP = new Sonido("HP", 10);
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP, sonidoHP);

        Monitor monitorGamer = new Monitor("Gamer", 32);
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Sonido sonidoGamer = new Sonido("Gamer", 18);
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer, sonidoGamer);

        Monitor monitorEconomico = new Monitor("Economico", 13);
        Teclado tecladoEconomico = new Teclado("Cable", "Economica");
        Raton ratonEconomico = new Raton("Cable", "Gamer");
        Sonido sonidoEconomico = new Sonido("Economica", 8);
        Computadora computadoraEconomica = new Computadora("Computadora Economica", monitorEconomico, tecladoEconomico, ratonEconomico, sonidoEconomico);

        Monitor monitorSamsung = new Monitor("Samsung", 42);
        Teclado tecladoSamsung = new Teclado("Cable", "Samsung");
        Raton ratonSamsung = new Raton("Cable", "Samsung");
        Sonido sonidoSamsung = new Sonido("Samsung", 16);
        Computadora computadoraSamsung = new Computadora("Computadora Gamer", monitorSamsung, tecladoSamsung, ratonSamsung, sonidoSamsung);

        Orden orden1 = new Orden();
        Orden orden2 = new Orden();
        Orden orden3 = new Orden();
        Orden orden4 = new Orden();
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        orden1.mostrarOrden();

        Computadora computadorasVarias = new Computadora("Computadora de diferentes marcas", monitorHP, tecladoGamer, ratonHP,sonidoGamer);
        orden2.agregarComputadora(computadorasVarias);
        orden2.agregarComputadora(computadoraEconomica);
        orden2.mostrarOrden();

        for(int i = 0; i < 11; i++){
            orden3.agregarComputadora(computadoraEconomica);
        }
        orden3.mostrarOrden();

        for(int i = 0; i < 9; i++){
            orden4.agregarComputadora(computadoraSamsung);
        }
        orden4.mostrarOrden();
    }
}
