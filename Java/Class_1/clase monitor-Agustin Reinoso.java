package ar.com.system2023.mundopc;

public class Monitor {
    private final int idMonitor;          // Variable para almacenar el id de cada monitor
    private String marca;                 // Variable para almacenar la marca de cada monitor
    private double tamanio;               // Variable para almacenar el tamaño de cada monitor
    private static int contadorMonitores; // Variable estática para llevar la cuenta de la cantidad de monitores creados

    // Constructor privado sin argumentos que incrementa el contador de monitores y asigna el id
    private Monitor ()¨{
        this.idMonitor = ++Monitor.contadorMonitores;
    }

    // Constructor público que acepta la marca y el tamaño del monitor
    public Monitor(String marca, double tamanio){
        this(); // Llama al constructor privado para asignar un id y actualizar el contador
        this.marca = marca;
        this.tamanio = tamanio;
    }

    // Método getter para la marca del monitor
    public String getmarca(){
        return this.marca;
    }

    // Método setter para la marca del monitor
    public void setMarca(String marca) {
        this.marca = marca;
    }

    // Método getter para el tamaño del monitor
    public double getTamanio(){
        return this.tamanio;
    }
    
    // Método setter para el tamaño del monitor
    public void setTamanio(double tamanio){
        this.tamanio = tamanio;
    }
    
     // Método getter para el id del monitor
    public int getIdMonitor(){
        return this.idMonitor;
    }

    // Método para representar el objeto Monitor como una cadena de texto
    @Override
    public String toString(){
        return "Monitor{" + "idMonitor=" + idMonitor + ", marca=" + marca + ", tamanio=" + tamanio + "";
    }
}
