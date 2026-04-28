-- init_database.sql
-- Cria o banco de dados e as tabelas usadas pelo projeto

-- 1) Cria o banco de dados
CREATE DATABASE "lgpd-database";

-- 2) Cria o usuário e concede privilégios (opcional, se já existir usar seu usuário)
-- ALTER USER postgres WITH PASSWORD 'postgres';
-- GRANT ALL PRIVILEGES ON DATABASE "lgpd-database" TO postgres;

-- 3) Conecta no banco de dados
\c "lgpd-database";

-- 4) Cria as tabelas
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR,
  gender VARCHAR
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE teachers (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  course_id INTEGER REFERENCES courses(id) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE evaluations (
  id SERIAL PRIMARY KEY,
  concept VARCHAR NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE,
  course_id INTEGER REFERENCES courses(id) ON DELETE SET NULL ON UPDATE CASCADE
);
