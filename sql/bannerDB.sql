CREATE DATABASE bannerDB;
USE bannerDB;

CREATE TABLE banner (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255),
    timer INT,
    link VARCHAR(255),
    isVisible BOOLEAN
);

INSERT INTO banner (description, timer, link, isVisible)
VALUES ('Welcome to our website!', 60, 'http://example.com', true);
