package test;

import accesodatos.*;

public class testInterfaces {
    public static void main(String[] args) {
        IAccesoDatos datos = new implementacionMySql();
        //datos.listar();
        //imprimir(datos);
        datos = new implementacionOracle();
        //datos.listar();
        imprimir(datos);

    }

    public static void imprimir(IAccesoDatos datos){
        datos.listar();
;    }
}
