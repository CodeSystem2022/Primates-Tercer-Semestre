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
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s' # el asterisco indica todo el archivo pero se puede seleccionar una columna o fila o ID
            entrada = input('Digite los id_persona a buscar: (separados por coma)')
            llaves_primarias = (tuple(entrada.split(', ')),)
            #id_persona= input('Digite un nro para el id_persona: ')
            cursor.execute(sentencia, llaves_primarias) #de esta manera ejecutamos la sentencia
            registros = cursor.fetchall()#recuperamos todos los registros que seran una lista si ponemos fetchone solo uno
            for registro in registros:
                print(registro)

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()