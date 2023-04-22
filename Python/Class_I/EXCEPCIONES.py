de  NumerosIgualesException  importar  NumerosIgualesException

resultado  =  Ninguno

un =  7
segundo = 0

prueba :
    a  =  int ( input ( 'Digite el primer numero: ' ))
    b  =  int ( input ( 'Digite el primer número: ' ))
    si  a  ==  b :
        generar  NumerosIgualesException ( 'Son números iguales' )
    resultado  =  a  /  b
excepto  TypeError  como  e :
    print ( f'TypeError - Ocurrió un error: [ { type ( e ) } ]' )
excepto  ZeroDivisionError  como  e :
    print ( f'ZeroDivisionError - Ocurrió un Error: [ { type ( e ) } ]' )
excepto  Excepción  como  e :
    print ( f"Excepción - Ocurrió un error: [ { type ( e ) } ]" )
más :
    print ( 'El código se ejecuta de forma correcta.' )
finalmente :
    print ( "Ejecucion del bloque finalmente" )

print ( f'El resultado es: [ { resultado } ]' )
print ( 'Seguimos...' )