CREATE DATABASE GoogleReviews;

USE GoogleReviews;

DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants(
  rest_id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (rest_id),
);

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews(
  review_id int AUTO_INCREMENT,
  picture VARCHAR(255) NOT NULL,
  date_posted VARCHAR(255) NOT NULL,
  rating DECIMAL(2,1) NOT NULL,
  text_review VARCHAR(255) NOT NULL,
  rest_id int,
  PRIMARY KEY (review_id),
  FOREIGN KEY (rest_id) REFERENCES resturants(rest_id),
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
  