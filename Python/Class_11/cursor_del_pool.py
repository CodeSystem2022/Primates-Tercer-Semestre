from logger_base import log
from conexion import Conexion


class CursorDelPool: # Clase que representa el cursor del pool
    def __init__(self): # Constructor de la clase
        self._conexion = None # Atributo de la clase
        self._cursor = None 
        
    def __enter__(self): # Metodo que se ejecuta al inicio del bloque with
        log.debug(f'Inicio del metodo with y __enter__ {self}') # Imprimimos el objeto
        self._conexion = Conexion.obtenerConexion() # Obtenemos la conexion
        self._cursor = self._conexion.cursor() 
        return self._cursor 
    
    def __exit__(self, tipo_excepcion, valor_excepcion, detalle_excepcion): # Metodo que se ejecuta al final del bloque with
        log.debug(f'Se ejecuta el metodo exit') 
        if valor_excepcion: 
            self._conexion.rollback() # Si hay una excepcion, se ejecuta el rollback    
            log.debug(f'Ocurrio una excepcion: {valor_excepcion}') 
        else:
            self._conexion.commit() # Si no hay una excepcion, se ejecuta el commit
            log.debug(f'Commit de la transaccion')
        self._cursor.close() # Cerramos el cursor
        Conexion.liberarConexion(self._conexion)


if __name__ == '__main__': # Bloque principal que significa que se esta ejecutando el archivo directamente
    with CursorDelPool() as cursor: # Abrimos el bloque with
        log.debug('Dentro del bloque with')
        cursor.execute('SELECT * FROM persona')
        log.debug(cursor.fetchall())