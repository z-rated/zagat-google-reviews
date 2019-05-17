DROP DATABASE IF EXISTS GoogleReviews;

CREATE DATABASE GoogleReviews;

USE GoogleReviews;

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  review_id INT AUTO_INCREMENT,
  reviewer VARCHAR(255) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  date_posted VARCHAR(255) NOT NULL,
  rating DECIMAL NOT NULL,
  text_review VARCHAR(255) NOT NULL,
  rest_id INT NOT NULL,
  PRIMARY KEY (review_id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
  