package accesodatos;

public interface IAccesoDatos {
    // No hereda de object, pero puede haber herencia entre interfaces 
    int MAX_REGISTRO = 10; // automaticamente es public final static
                           // y es necesario asignar un valor al declarar

    // Cualquier método es público y abstracto
    void insertar();
    void listar();
    void actualizar();
    void eliminar();
}
