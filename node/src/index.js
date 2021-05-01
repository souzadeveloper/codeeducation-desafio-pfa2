const express = require('express');
const mysql = require('mysql');
const { promisify } = require('util');

const app = express();
const port = 3000;

const config = {
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'pfa'
};

const conn = mysql.createConnection(config);

const query = promisify(conn.query).bind(conn);

app.get('/', async (req, res) => {

  res.setHeader("Content-Type", "text/html; charset=iso-8859-1");

  //res.charset = 'utf-8';

  let html = '<h1>Módulos Curso Full Cycle 2.0</h1>'
  
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