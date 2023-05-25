psql -U postgres     # login to postgres

CREATE DATABASE dbms;

\c dbms;             # connect to the database

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phoneNo VARCHAR(255) NOT NULL
);  
