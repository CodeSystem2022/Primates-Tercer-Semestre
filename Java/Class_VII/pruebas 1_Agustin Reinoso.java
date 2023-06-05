package test;
import accesodatos.*;
public class TestInterfaces{
    public static void main(String[] args) {
        IAcceso Datos datos = new Implementacion MySql();
        datos.listar(); 
    }
}
