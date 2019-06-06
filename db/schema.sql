
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
  text_review TEXT NOT NULL,
  rest_id INT NOT NULL,
  PRIMARY KEY (review_id)
);
  