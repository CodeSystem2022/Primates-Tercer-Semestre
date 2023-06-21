import psycopg2 as bd

conexion = bd.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    conexion.autocommit = False
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Carlos', 'Lara', 'clara@email.com')
    cursor.execute(sentencia, valores)

    sentencia = 'UPODATE persona SET nombre=%s, email=%s WHERE id_persona=%s'
    valores = ('Juan', 'Juarez', 'jcjuarez@email.com', 1)
    cursor.execute(sentencia, valores)

    conexion.commit()
    print('Termina la transaccion')
except Exception as e:
    conexion.rollback()
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()