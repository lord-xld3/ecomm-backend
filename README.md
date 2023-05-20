# E-Commerce Backend

This is the backend application for an e-commerce website. It provides API endpoints to manage products, categories, and tags.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run the application locally, you need to have the following installed on your machine:

- Node.js
- MySQL database server

1. Clone the repository:

`git clone <repository-url>`

2. Navigate to the project's root directory:

`cd e-commerce-backend`


3. Install the dependencies:

`npm install`


4. Set up the database:

- Create a new MySQL database.
- Copy the contents of the `db/schema.sql` file and execute the SQL statements in your MySQL database management tool to create the necessary tables.

5. Set up environment variables:

- Create a `.env` file in the root directory.
- Set the following environment variables in the `.env` file:

  ```env
  DB_NAME=<your-database-name>
  DB_USER=<your-database-username>
  DB_PASSWORD=<your-database-password>
  DB_HOST=<your-database-host>
  DB_PORT=<your-database-port>
  ```

  Replace `<your-database-name>`, `<your-database-username>`, `<your-database-password>`, `<your-database-host>`, and `<your-database-port>` with your actual database configuration.

6. Start the application:

`npm start`


The server will start running on `http://localhost:3001`.

## Usage

Once the application is up and running, you can use a tool like [Postman](https://www.postman.com/) to interact with the API endpoints. The available endpoints are described in the [API Endpoints](#api-endpoints) section.

## API Endpoints

The following API endpoints are available:

- **Categories**
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get a single category by ID
- `POST /api/categories` - Create a new category
- `PUT /api/categories/:id` - Update a category by ID
- `DELETE /api/categories/:id` - Delete a category by ID

- **Products**
- `GET /api/products` - Get all products with associated categories and tags
- `GET /api/products/:id` - Get a single product by ID with associated categories and tags
- `POST /api/products` - Create a new product with associated tags
- `PUT /api/products/:id` - Update a product by ID with associated tags
- `DELETE /api/products/:id` - Delete a product by ID

- **Tags**
- `GET /api/tags` - Get all tags with associated products
- `GET /api/tags/:id` - Get a single tag by ID with associated products
- `POST /api/tags` - Create a new tag
- `PUT /api/tags/:id` - Update a tag by ID
- `DELETE /api/tags/:id` - Delete a tag by ID

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is not licensed
