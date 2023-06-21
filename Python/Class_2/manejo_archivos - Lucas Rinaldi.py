# Declaramos una variable - Lucas Rinaldi

try:
    archivo = open("prueba.txt", "w") # La w es write (escribir)
    archivo.write("Me llamo lucas y manejo archivos")
    archivo.write("Aca termina el manejo de archivos")
except Exception as e:
    print()
finally: # el finally siempre se ejecuta
    archivo.close() # Con esto se debe cerrar el archivo


