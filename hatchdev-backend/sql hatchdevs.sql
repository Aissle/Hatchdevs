-- drop database ecommerce;
-- create database ecommerces;
-- drop database ecommerces;

-- productCREATE TABLE product (
-- 	id INT,
-- 	name VARCHAR(255),
--     price DECIMAL(10,2),
--     description TEXT
-- );

-- ALTER TABLE product ADD COLUMN inStock INT;
-- ALTER TABLE product RENAME COLUMN price TO unitPrice
-- drop table product
-- create table products (
-- 	id  int primary key auto_increment,
--     name varchar(50) not null,
--     )

-- Create database library_management_system;
-- CREATE TABLE authors(
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(50) NOT NULL,
--     email VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE book(
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(50) NOT NULL UNIQUE,
--     no_of_pages INT,
--     isbn_no INT UNIQUE,
--     no_in_stock INT DEFAULT(0),
--     lang VARCHAR(20) NOT NULL,
--     published_year VARCHAR(10) NOT NULL
-- );



-- create database school_management_system
-- student management database
-- CREATE TABLE students(
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL,
--     middle_name VARCHAR(50) NOT NULL,
--     gendar VARCHAR(1) NOT NULL,
--     dob DATE NOT NULL
-- );

-- CREATE TABLE staff(
--  	id INT PRIMARY KEY AUTO_INCREMENT,
--      first_name VARCHAR(50) NOT NULL,
--      last_name VARCHAR(50) NOT NULL,
--      middle_name VARCHAR(50) NOT NULL,
--      gendar VARCHAR(1) NOT NULL,
--      dob DATE NOT NULL,
--      role ENUM('teacher','principal','viceprincipal'),
--      type ENUM('teaching','non-teaching')
-- );
-- drop table staff

-- insert into authors(email, name) values ("a@gmai;.com", "aminat"),("b@gmail.com","Bolu"),("B@gmail.coom","caleb")
