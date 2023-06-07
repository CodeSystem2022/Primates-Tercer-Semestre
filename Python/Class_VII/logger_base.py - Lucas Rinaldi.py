import logging as log

# docs.python.org/3/howto/logging.html
# Llamamos una configuracion basica

log.basicConfig(level=log.debug,
                format="%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s",
                datefmt="%I:%M:%S %p",
                handlers=[
                    log.FileHandler("capa_datos.log"),
                    log.StreamHandler() 
                ]

)

if __name__ == "__main__":
    log.debug("Mensaje a nivel debug")
    log.info("Mensaje a nivel info")
    log.warning("Mensaje a nivel warning")
    log.error("Mensaje a nivel erro")
    log.critical("Mensaje a nivel critical")