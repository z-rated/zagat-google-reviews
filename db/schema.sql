

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  review_id INT,
  date_posted VARCHAR(255) NOT NULL,
  rating DECIMAL NOT NULL,
  text_review TEXT NOT NULL,
  restaurant_id INT REFERENCES restaurants(id),
  user_id INT REFERENCES users(id),
  PRIMARY KEY (review_id, rest_id, user_id)
);


DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants (
  id INT,
  restaurant_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT,
  username VARCHAR(255) NOT NULL,
  profile_pic VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

/* MongoDB Schema 
  collection : restaurants
  {
    _id: ObjectId(...);
    reviews: [
      {
        posted_date: "January 10, 2019",
        rating: "4.5",
        text_review: "Awesome!"
        author: {
          username: "Xin Chen",
          profile_pic: "some link";
          }
      },
      {
        posted_date: "January 10, 2019",
        rating: "4.5",
        text_review: "Awesome!"
        author: {
          username: "Xin Chen",
          profile_pic: "some link";
          }
      },{
        posted_date: "January 10, 2019",
        rating: "4.5",
        text_review: "Awesome!"
        author: {
          username: "Xin Chen",
          profile_pic: "some link";
          }
      },{
        posted_date: "January 10, 2019",
        rating: "4.5",
        text_review: "Awesome!"
        author: {
          username: "Xin Chen",
          profile_pic: "some link";
          }
      },{
        posted_date: "January 10, 2019",
        rating: "4.5",
        text_review: "Awesome!"
        author: {
          username: "Xin Chen",
          profile_pic: "some link";
          }
      }
    ]
  }

  

  
*/