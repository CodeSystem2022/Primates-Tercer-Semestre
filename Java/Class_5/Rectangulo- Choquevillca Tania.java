
package domian;

public class Rectangulo extends FiguraGeometrica {
    //constructor
    public Rectangulo(String tipoFigura){
        super(tipoFigura);
    }
    
    @Override
    public void dibujar(){ //Implementando el metodo
        System.out.println("se imprime un: "+this.getClass().getSimpleName());
    }
    
}
