//Archivo: Escritor 
package domian;


public class Escritor  extends Empleado {
    final TipoEscritura tipoEscritura;
    
    public Escritor (String nombre, double sueldo, TipoEscritura tipoEscritura){
        super (nombre, sueldo);
        this.tipoEscritura = tipoEscritura;
    }
    
    //Método para sobreescribir
    @Override
    public String obtenerDetalles(){
        return super.obtenerDetalles()+ ", Tipo Escritura: " + tipoEscritura.getDescripcion ();
    }
    
    @Override
    public String toScring(){
       return "Escritor { " + "tipoEscritura = " + tipoEscritura + '}' + " " + super.toString();
    }
     public TipoEscritura getTipoEscritura (){
         return this.tipoEscritura;
     }
}


//Archivo: TipoEscritura

package domain;


public enum TipoEscritura { 
    CLASICO ("Escritura a mano"),
    MODERNO ("Escritura digital");
    
    private final String descripcion;
    
    private TipoEscritura (String descripccion) { //Constructor
        this.descripcion = descripcion ;
    }
    
    //Método get
    public String getDescripcion(){
        return this.descripcion;
    }
    
    
}
