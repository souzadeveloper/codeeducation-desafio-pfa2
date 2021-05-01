use pfa;

CREATE TABLE cursos (id int not null auto_increment, descricao varchar(255), primary key(id));

INSERT INTO cursos (descricao) VALUES ('Docker');
INSERT INTO cursos (descricao) VALUES ('Kubernetes');
INSERT INTO cursos (descricao) VALUES ('Fundamentos de Arquitetura de Software');
INSERT INTO cursos (descricao) VALUES ('RabbitMQ');
INSERT INTO cursos (descricao) VALUES ('Domain Drive Design');
INSERT INTO cursos (descricao) VALUES ('Apache Kafka');
INSERT INTO cursos (descricao) VALUES ('Service Mesh com Istio');
INSERT INTO cursos (descricao) VALUES ('Observabilidade');