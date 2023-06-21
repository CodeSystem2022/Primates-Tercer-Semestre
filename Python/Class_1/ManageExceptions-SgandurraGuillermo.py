from sameNumberExc import SameNumber
result = None


try:
    a = int(input('Digite el primer número: '))
    b = int(input('Digite el primer número: '))
    if a == b:
        raise SameNumber('Son iguales.')
    result = a / b
except TypeError as e:
    print(f'Error: [{type(e)}]')
except ZeroDivisionError as e:
    print(f'Error: [{type(e)}]')
except Exception as e:  # Exception es para todos los errores, si usamos por ejemplo ZeroDivisionError no
    print(f"Error: [{type(e)}]")
else:
    print('El código se ejecuto de forma correcta.')
finally:
    print("Ejecución del bloque finally")

print(f'El resultado es: [{result}]')
print('Seguimos...')
