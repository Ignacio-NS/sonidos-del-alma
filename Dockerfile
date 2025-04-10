FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    mysql-server \
    php \
    libapache2-mod-php \
    php-mysql \
    git

RUN git clone https://github.com/ignacio-neira-saldivia/sonidos-del-alma.git /tmp/repo

RUN rm -rf /var/www/html/* && \
    mv /tmp/repo/*.html /var/www/html/ && \
    cp -r /tmp/repo/css /var/www/html/ && \
    cp -r /tmp/repo/js /var/www/html/ && \
    cp -r /tmp/repo/img /var/www/html/ && \
    rm -rf /tmp/repo

EXPOSE 80
CMD service mysql start && apache2ctl -D FOREGROUND
