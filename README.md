# E-commerce Back End

## Description:

This is an e-commerce back-end database of an E-Commerce website. Express.js was used for the server and MySQL for the database along with Sequelize as the ORM to run SQL models and queries. The SQL database includes tables for products, categories, tags, and product tags. RESTful API routes are used to make requests and updates from the database which are joined through Sequelize queries.

## Acceptance Criteria:

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```


## Usage
![alt text](./assets/images/demo.gif)

For more information - Please visit the following video on how the application works ➡
[E-commerce Back End](https://www.loom.com/share/4e1a6e9f209e47fba271935c0bc1b403?sid=c8a8b793-72d1-43e7-aadd-a733bdcc79f5)

This application is running under mysql as a local host, you can modify the .env file with your own user/password to start the application.

After installation :

- Creat, Sync and Seed data:
  - run `mysql -u root -p` in terminal and use password to login to your mysql shell.
  - `source db/schema.sql` in mysql shell.
  - `node seeds/index.js` in terminal.
- Functionality:
  - `npm start`in terminal to start the server.
  - use [Insomnia](https://insomnia.rest/download) or [Postman](https://www.postman.com/) to interact through different routes.

## Credits

- USYD-Bootcamp (week 13 class activities)
