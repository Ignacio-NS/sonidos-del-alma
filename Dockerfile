
FROM ubuntu:latest


ENV DEBIAN_FRONTEND=noninteractive


RUN apt-get update && \
    apt-get install -y apache2 && \
    apt-get clean


COPY . /var/www/html/

Expón el puerto 80
EXPOSE 80

Inicia Apache en primer plano
CMD ["apachectl", "-D", "FOREGROUND"]
