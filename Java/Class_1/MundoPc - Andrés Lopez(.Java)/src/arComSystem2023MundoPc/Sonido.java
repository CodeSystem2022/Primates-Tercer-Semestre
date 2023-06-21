package arComSystem2023MundoPc;

public class Sonido {
    private final int idSonido;
    private String marca;
    private int decibeles;
    private static int contadorSonido;

    private Sonido(){
        this.idSonido = ++Sonido.contadorSonido;
    }

    public Sonido(String marca, int decibeles){
        this();
        this.marca = marca;
        this.decibeles = decibeles;
    }

    public int getIdSonido() {
        return idSonido;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public int getDecibeles() {
        return decibeles;
    }

    public void setDecibeles(int decibeles) {
        this.decibeles = decibeles;
    }

    @Override
    public String toString() {
        return "Sonido [idSonido=" + idSonido + ", marca=" + marca + ", decibeles=" + decibeles + "]";
    }

    
}
