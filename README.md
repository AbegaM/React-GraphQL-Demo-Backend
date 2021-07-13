# React GraphQL Demo Back-End

## Getting Started

- These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

### Installation

1.  Clone the repo
    ```
    git clone https://github.com/AbegaM/React-GraphQL-Demo-Backend.git
    ```
2.  Install NPM packages
    ```
     npm install
    ```

### Environments

1.  Create env files
    - Create a file called .env
2.  Add your environment variables in the files
      ```
        PORT
        DB_USER_NAME
        DB_PASSWORD
        DB_PORT
        DB_HOST
        DB_NAME
      ```
    * Example for environment variables, (only for local env) 
      ``` 
        PORT=6001
        DB_USER_NAME=admin
        DB_PASSWORD=12345678
        DB_PORT=5432
        DB_HOST=localhost
        DB_NAME=testDb
      ```
## Running code

- Running code with local environment
  ```
   npm run start:local
  ```
- Running code with dev server environment (Run with nodemon)
  ```
   npm run start:dev
  ```
## setup the database
    * Start your postgres database 
    * Create your test database 
    * Create a table called tests
    * Create a column called test, in the tests table

## Built with
- [NodeJS](https://nodejs.org/en/)
- [Apollo GraphQL](https://www.apollographql.com/)

