
FROM ubuntu:latest

ENV DEBIAN_FRONTEND=noninteractive


RUN apt-get update && apt-get install -y \
    apache2 \
    mysql-server \
    php \
    libapache2-mod-php \
    php-mysql \
    git


RUN git clone https://github.com/Ignacio-NS/sonidos-del-alma.git /tmp/repo

RUN rm -rf /var/www/html/* && mv /tmp/repo/*.html /var/www/html/ && rm -rf /tmp/repo

EXPOSE 80

CMD service mysql start && apache2ctl -D FOREGROUND
