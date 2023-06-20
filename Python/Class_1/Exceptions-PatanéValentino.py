from NumerosIgualesException import NumerosIgualesException

resultado = None

a= 7
b=0

try:
    a = int(input('Digite el primer número: '))
    b = int(input('Digite el primer número: '))
    if a == b:
        raise NumerosIgualesException('Son números iguales')
    resultado = a / b
except TypeError as e:
    print(f'TypeError - Ocurrió un Error: [{type(e)}]')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un Error: [{type(e)}]')
except Exception as e: 
    print(f"Exception - Ocurrió un Error: [{type(e)}]")
else:
    print('El código se ejecuto de forma correcta.')
finally:
    print("Ejecución del bloque finally")

print(f'El resultado es: [{resultado}]')
print('Seguimos...')
