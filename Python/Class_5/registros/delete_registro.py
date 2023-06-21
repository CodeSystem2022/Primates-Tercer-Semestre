import psycopg2 #esto es para poder conectarnos a Postgres
conexion = psycopg2.connect(
    user='postgres',
    password='4271369.',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'DELETE FROM persona WHERE id_persona=%s'
            entrada = input('Digite el nro de registro a eliminar: ')
            valores = (entrada,) #es una tupla de vaolres no olvidar la coma pra que sea tupla
            cursor.execute(sentencia, valores) #de esta manera ejecutamos la sentencia
            registros_eliminados = cursor.rowcount

            print(f'Los registros eliminados son: {registros_eliminados}')

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()