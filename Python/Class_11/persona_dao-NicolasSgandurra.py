from connection import Connection
from persona import Persona
from cursor_pool import CursorPool
from logger_base import log


class PersonaDAO:
    """
    DAO significa: 'Data Access Object'
    CRUD Significa:
    Create, Read, Update, Delete
    """
    _SELECT = 'SELLECT * FROM persona ORDER BY id_persona'
    _INSERT = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    _UPDATE = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona'
    _DELETE = 'DELETE FROM persona WHERE id_personas=%s'

    # Definimos los métodos de clase
    @classmethod
    def select(cls):
        with CursorPool() as cursor:
            cursor.execute(cls._SELECT)
            registers = cursor.fetchall()
            personas = []
            for register in registers:
                persona = Persona(register[0], register[1], register[2], register[3])
                personas.append(persona)
            return personas

    @classmethod
    def insert(cls, persona):
        with CursorPool() as cursor:
            values = (persona.nombre, persona.apellido, persona.email)
            cursor.execute(cls._INSERT, values)
            log.debug(f'Persona Insertada: {persona}')
            return cursor.rowcount

    @classmethod
    def update(cls, persona):
        with CursorPool() as cursor:
            values = (persona.nombre, persona.apellido, persona.email)
            cursor.execute(cls._UPDATE, values)
            log.debug(f'Persona Actualizada: {persona}')
            return cursor.rowcount

    @classmethod
    def delete(cls, persona):
        with CursorPool() as cursor:
            values = (persona.id_persona,)
            cursor.execute(cls._DELETE, values)
            log.debug(f'Persona eliminada: {persona}')
            return cursor.rowcount


if __name__ == '__main__':
    # Eliminar un registro
    persona1 = Persona(id_persona=18)
    personas_eliminadas = PersonaDAO.delete(persona1)
    log.debug(f'Persona eliminada: {personas_eliminadas}')

    # Actualizar el registro
    persona1 = Persona(nombre='Nito', apellido='Sgandurra', email='NicoSg@gmail.com')
    personas_actualizadas = PersonaDAO.update(persona1)
    log.debug(f'Personas actualizadas: {personas_actualizadas}')

    # Insertar un registro
    persona1 = Persona(nombre='Linita', apellido='Panta', email='LinPanta@gmail.com')
    personas_insertadas = PersonaDAO.insert(persona1)
    log.debug(f'Personas insertadas: {personas_insertadas}')

    # Seleccionar objetos
    personas = PersonaDAO.select()
    for persona in personas:
        log.debug(persona)
