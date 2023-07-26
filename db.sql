-- SQLBook: Code
-- Active: 1690283836675@@127.0.0.1@3306@Heavens
CREATE DATABASE iglesiaHeavensMysqlDB;

USE iglesiaHeavensMysqlDB;

CREATE TABLE Departamento (
  idDepartamento INT AUTO_INCREMENT PRIMARY KEY,
  nombreDepartamento VARCHAR(100) NOT NULL
);

CREATE TABLE Municipio (
  idMunicipio INT AUTO_INCREMENT PRIMARY KEY,
  NombreMunicipio VARCHAR(100) NOT NULL,
  idDepartamento INT NOT NULL,
  FOREIGN KEY (idDepartamento) REFERENCES Departamento (idDepartamento)
);

CREATE TABLE Comuna (
  idComuna INT AUTO_INCREMENT PRIMARY KEY,
  nombreComuna VARCHAR(100) NOT NULL,
  idMunicipio INT NOT NULL,
  FOREIGN KEY (idMunicipio) REFERENCES Municipio (idMunicipio)
);

CREATE TABLE Barrio (
  idBarrio INT AUTO_INCREMENT PRIMARY KEY,
  nombreBarrio VARCHAR(100) NOT NULL,
  idComuna INT NOT NULL,
  FOREIGN KEY (idComuna) REFERENCES Comuna (idComuna)
);

CREATE TABLE Creyente (
  idIdentificacion INT AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  NroCelular VARCHAR(20) NOT NULL,
  dirección VARCHAR(200) NOT NULL,
  idBarrio INT NOT NULL,
  FOREIGN KEY (IdBarrio) REFERENCES Barrio (idBarrio)
);
