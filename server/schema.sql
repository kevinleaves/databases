DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(25)
);

CREATE TABLE IF NOT EXISTS messages (
  message_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(140),
  created_at DATE,
  roomname VARCHAR(25),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

