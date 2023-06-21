import psycopg2 #Essto es para conectarnos a la base de datos Postgre

conexion=  psycopg2.connect(
    user = 'postgres', 
    password = 'osman25',
    host = '127.0.0.1',
    port='5432',
    database='test_bd'
)
try: 
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
            valores = ('Juan Carlos', 'Roldan', 'rcarlos@mail.com', 1)    #es una tupal de tupla
            cursor.execute(sentencia, valores) #De esta manera ejecutamos la sentencia
            registros_actualizados= cursor.rowcount #recuperamos todos los registros que seran una lista
            print(f"Los registrosa actualizados son: {registros_actualizados}")

    
except Exception as e:
    print(f"Ocurrio un error: {e}")
finally:
    conexion.close() 
