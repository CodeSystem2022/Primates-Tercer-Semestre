resultado = None
a = 7
b= 0
try:
    resultado = a / b
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrio un error: {type(e)}')

print(f'El resultado es: {resultado}')
print('seguimos...')