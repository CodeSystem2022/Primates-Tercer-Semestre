import logging as log

# Llamamos una configuración básica.
log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s',
                datefmt='%I:%M:%S %p',
                handlers=[
                    log.FileHandler('capaDatos.log'),
                    log.StreamHandler()
                ])

if __name__ == '__main__':
    log.basicConfig(level=log.DEBUG)
    log.debug("Mensaje a nivel debug")
    log.info('Mensaje a nivel de info')
    log.warning('Mensaje a nivel de warning')
    log.error('Mensaje a nivel de error')
    log.critical('Mensaje a nivel de critical')
