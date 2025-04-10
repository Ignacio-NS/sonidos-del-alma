1. Clona el repositorio:
   git clone https://github.com/Ignacio-NS/sonidos-del-alma.git
   cd sonidos-del-alma

🐳 Despliegue con Docker
Este proyecto incluye un Dockerfile que instala Apache, PHP y MySQL, y sirve los archivos HTML desde un servidor Apache dentro del contenedor.

🧱 Construir la imagen
bash
Copiar
Editar
docker build -t sonidos-del-alma .
▶️ Ejecutar el contenedor
docker run -p 8080:80 sonidos-del-alma
Luego abre tu navegador en: http://localhost:8080
