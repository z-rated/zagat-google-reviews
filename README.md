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
GET /restaurants/:uid/googleReviews
```
### Post a new review to a restaurant by its id
```
POST /restaurants/:uid/googleReviews
```
### Delete a specific review by its id.
```
DELETE /reviews/:uid/gooleReviews
```
### Update a specific review by its id.
```
PATCH /reviews/:uid/gooleReviews
```