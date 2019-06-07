# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
## CRUD API

### Get a list of reviews by restaurant id
```
GET /restaurants/:id/googleReviews
```
This route expects an integer id from req.params.id.

Successful requests will return an array of five objects with the following structure:
{
  "review_id": INTEGER,
  "reviewer": STRING,
  "date_posted": STRING,
  "rating": DECIMAL,
  "picture": URL,
  "text_review": STRING,
  "restaurant_id": INTEGER
}

### Post a new review to a restaurant by its id
```
POST /restaurants/:id/googleReviews
```
This route expects an object with following structure: 
{
  "date_posted": STRING,
  "rating": DECIMAL,
  "text_review": STRING,
  "restaurant_id": INTEGER
  "user_id": STRING,
}
### Delete a specific review by its id.
```
DELETE /reviews/:id/gooleReviews
```
This route expects an integer id from req.params.id.
### Update a specific review by its id.
```
PATCH /reviews/:id/gooleReviews
```
This route expects an integer id from req.params.id
And an object with any key-value pairs inside following structure:
{
  "rating": DECIMAL,
  "text_review": STRING,
}
and always has a key-value pair: {
  "date_posted": STRING,
}
