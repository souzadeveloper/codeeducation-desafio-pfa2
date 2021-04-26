const express = require('express');
const mysql = require('mysql');
const { promisify } = require('util');

const app = express();
const port = 3000;

const config = {
  host: 'mysql',
  user: 'root',
  password: 'root'
};

const conn = mysql.createConnection(config);

const query = promisify(conn.query).bind(conn);

async function Init() {
  
  await query('CREATE DATABASE IF NOT EXISTS nodedb');
  await query('use nodedb');

  const rows = await query(`SHOW TABLES LIKE 'cursos'`);

  if (rows.length == 0) {
    await query('CREATE TABLE cursos (id int not null auto_increment, descricao varchar(255), primary key(id))');      
  } else {
    await query(`DELETE FROM cursos`);
  }

  await query(`INSERT INTO cursos (descricao) VALUES ('Docker')`);
  await query(`INSERT INTO cursos (descricao) VALUES ('Fundamentos de Arquitetura de Software')`);
  await query(`INSERT INTO cursos (descricao) VALUES ('RabbitMQ')`);
  await query(`INSERT INTO cursos (descricao) VALUES ('Autenticação entre Microserviços')`);
  await query(`INSERT INTO cursos (descricao) VALUES ('Apache Kafka')`);
}

Init();

app.get('/', async (req, res) => {
  let html = '<h1>Módulos Curso Full Cycle</h1>'
  
  // Seleciona os Registros
  const rows = await query('SELECT * FROM cursos');

  html += `<table border='1'>`
  html += '<tr>'
  html += '<td>ID</td>'
  html += '<td>Descrição</td>'
  html += '</tr>'

  rows.forEach(function(data) {
    html += '<tr>'
    html += '<td>' + data.id + '</td>'
    html += '<td>' + data.descricao + '</td>'
    html += '</tr>'
  });

  html += '</table>'

  return res.send(html);  
})

app.listen(port, () => {
  console.log('Servidor Rodando na porta ' + port)
})