# Imagen base
FROM ubuntu:latest

# Evitar prompts durante la instalación
ENV DEBIAN_FRONTEND=noninteractive

# Instalar Apache, PHP y Git
RUN apt-get update && apt-get install -y \|
    apache2 \
    php \
    libapache2-mod-php \
    git \
    && apt-get clean

# Clonar el repositorio
RUN git clone https://github.com/Ignacio-NS/sonidos-del-alma.git /tmp/repo

# Copiar archivos al directorio público de Apache
RUN rm -rf /var/www/html/* && cp -r /tmp/repo/* /var/www/html/

# Exponer el puerto del servidor
EXPOSE 80

# Iniciar Apache al arrancar el contenedor
CMD ["apachectl", "-D", "FOREGROUND"]
