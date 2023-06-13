import psycopg2 #Essto es para conectarnos a la base de datos Postgre

conexion=  psycopg2.connect(
    user = 'postgres', 
    password = 'osman25',
    host = '127.0.0.1',
    port='5432',
    database='test_bd'
)

cursor = conexion.cursor()
sentencia = "SELECT * FROM persona"
cursor.execute(sentencia) # de esta manera ejecutamos la sentencia
registros = cursor.fetchall() #Recuperamos todos los registros que seran una lista
