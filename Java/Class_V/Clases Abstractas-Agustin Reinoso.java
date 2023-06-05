//Archivo: FiguraGeometrica

package domian;

public abstract class FiguraGeometrica {
    protected String tipoFigura;
    
    protected FiguraGeometrica (String tipoFigura) {
        this.tipoFigura = tipoFigura;
        
    }
    //Método abstracto
    public abstract void dibujar();
    
    //Agregamos el get y set 
    
    public String getTipoFigura(){
        return tipoFigura;
    }
    
    public viod setTipoFigura(){
        this.tipoFigura = tipoFigura;
    }
    @Override
    public String toString (){
        return "FiguraGeometrica{" + "tipoFigura = " + tipoFigura + '}';
    }
}
