# codeeducation-desafio-pfa
Projeto do Desafio do PFA usando Docker com Nginx/Node/Mysql.

O Objetivo do Desafio é náo utilizar docker-compose.

Primeiramente vamos cria uma Network de nome "desafio-pfa":

#### `docker network create desafio-pfa`

Para executar a aplicação, precisaremos criar um container para rodar o Mysql:

Para criar o container utilizando a nossa Network execute:
#### `docker run -d --name mysql --network=desafio-pfa -e MYSQL_ROOT_PASSWORD=root -v "$(pwd)"/mysql:/var/lib/mysql mysql:5.7`

Agora vamos subir o container com Node.js que contem a aplicação que gera a Listagem de Módulos do Curso Full Cycle 2.0, tambem na mesma Network para que exista comunição entre os nossos containers:

#### `docker run -d --name nodeapp -p 3000:3000 --network=desafio-pfa souzadeveloper/desafio-pfa1-nodeapp`

Por último vamos subir um container com o Nginx, que será o responsável redirecionar as nossas chamadas para a porta 3000 que é onde está rodando a nossa Aplicação em Node.js:

#### `docker run -d --name nginx -p 8080:80 --network=desafio-pfa souzadeveloper/desafio-pfa1-nginx`

Para testar o Nginx acesse no Browser a URL abaixo:

http://localhost:8080

Se tudo correu bem você verá a nossa Listagem de Cursos!!! 🚀🚀🚀

##Imagens geradas:

- [Imagem Node.js](https://hub.docker.com/repository/docker/souzadeveloper/desafio-pfa1-nodeapp)
- [Imagem Ngingx](https://hub.docker.com/repository/docker/souzadeveloper/desafio-pfa1-nginx)