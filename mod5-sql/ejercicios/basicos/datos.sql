
DROP DATABASE IF EXISTS ejemplos_basicos;

CREATE DATABASE ejemplos_basicos;

USE ejemplos_basicos;

CREATE TABLE clientes(
    id_cliente INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(255),
    edad INT
);
CREATE TABLE productos(
    id_producto INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(255),
    descripcion VARCHAR(1024),
    precio INT
);
CREATE TABLE empleados(
    id_empleado INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(255),
    departamento VARCHAR(1024),
    salario INT
);

INSERT INTO clientes VALUES (1,'Daniel', 30);
INSERT INTO clientes (nombre, edad) VALUES ('Manolo', 40);
INSERT INTO clientes (nombre, edad) VALUES ('Jonh Doe', 15);
INSERT INTO clientes (nombre, edad) VALUES ('Antonia', 16);
INSERT INTO clientes (nombre, edad) VALUES ('Maria', 18);
INSERT INTO clientes (nombre, edad) VALUES ('Manolo', 40);
INSERT INTO clientes (nombre, edad) VALUES ('Antonia', 40);

INSERT INTO productos (nombre, descripcion, precio) VALUES ('leche marca 1', 'descripcion leche marca 1', 100);
INSERT INTO productos (nombre, descripcion, precio) VALUES ('leche marca 2', 'descripcion leche marca 1', 50);
INSERT INTO productos (nombre, descripcion, precio) VALUES ('chocolate marca 1', 'descripcion chocolate marca 1', 200);

INSERT INTO empleados (nombre, departamento, salario) VALUES ('Daniel', 'frontend', 2000);
INSERT INTO empleados (nombre, departamento, salario) VALUES ('Manolo', 'frontend', 3000);
INSERT INTO empleados (nombre, departamento, salario) VALUES ('Pepe', 'backend', 1500);
INSERT INTO empleados (nombre, departamento, salario) VALUES ('Antonio', 'backend', 700);
INSERT INTO empleados (nombre, departamento, salario) VALUES ('Maria', 'frontend', 1700);