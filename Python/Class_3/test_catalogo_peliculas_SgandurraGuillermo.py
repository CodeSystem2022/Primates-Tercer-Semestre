from dominio.Pelicula import Pelicula
from servicio.catalogo_peliculas import CatalogoPeliculas as CatPeli
opcion = None
while opcion != 4:
    try:
        print("Opciones: ")
        print("1. Agregar Peliculas")
        print("2: Eliminar las Peliculas")
        print("3. Eliminar catálogo de peliculas")
        print("4. Salir")
        opcion = int(input("Digite una opcion de menú (1-4): "))
        if opcion == 1:
            nombre_pelicula = input("Digite el nombre de la pelicula: ")
            pelicula = Pelicula(nombre_pelicula)
            CatPeli.agregar_peliculas(pelicula)
        elif opcion == 2:
            CatPeli.listar_peliculas()
        elif opcion == 3:
            CatPeli.eliminar_peliculas()
# pylint: disable=broad-except 
# (Esto Desactiva la camputara de expeciones de manera amplia) es como si fuera un comando 
    except Exception as e:
        print(f"Ocurrio un error de tipo: {e}")
        opcion = None
    else:
        print("Salimos del programa")
