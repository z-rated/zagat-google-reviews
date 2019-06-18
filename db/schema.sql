
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS users;

CREATE TABLE restaurants (
  id SERIAL,
  restaurant_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE users (
  id SERIAL,
  username VARCHAR(255) NOT NULL,
  profile_pic VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);



CREATE TABLE reviews (
  review_id SERIAL,
  date_posted VARCHAR(255) NOT NULL,
  rating DECIMAL NOT NULL,
  text_review TEXT NOT NULL,
  restaurant_id INT REFERENCES restaurants(id),
  user_id INT REFERENCES users(id),
  PRIMARY KEY (review_id, restaurant_id, user_id)
);



/* MongoDB Schema 
  collection : restaurants
  {
    _id: ObjectId(...);
    name: 'some name';
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
          id: '12345'
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