CREATE DATABASE GoogleReviews;

USE GoogleReviews;

CREATE TABLE restaurants(
  rest_id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (rest_id)
);


CREATE TABLE reviews(
  review_id int AUTO_INCREMENT,
  picture VARCHAR(255) NOT NULL,
  date_posted VARCHAR(255) NOT NULL,
  rating DECIMAL(2,1) NOT NULL,
  text_review VARCHAR(255) NOT NULL,
  rest_id int,
  PRIMARY KEY (review_id),
  FOREIGN KEY (rest_id) REFERENCES resturants(rest_id),
)
