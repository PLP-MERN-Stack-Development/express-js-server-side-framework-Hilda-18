# Express.js Server-Side Framework – Hilda-18

## 📖 Overview
This project demonstrates the use of **Express.js** to build a simple RESTful API for managing product data.  
It includes **CRUD operations**, **routing**, **middleware**, and **error handling** — showing how Express works as a server-side framework.

---

## ⚙️ How the Project Works
When the server starts, it listens for requests on `http://localhost:3000`.  
The application uses **Express.js** to manage routes that allow users to interact with product data.

All product information is stored in a `products.json` file inside the `data` folder.  
The server handles requests as follows:

- **GET** requests retrieve product data.  
  - `/api/products` returns all products.  
  - `/api/products/:id` returns a single product by its unique ID.  
- **POST** requests add a new product by sending details in JSON format.  
- **PUT** requests update an existing product based on its ID.  
- **DELETE** requests remove a product by ID.

Each request is handled through Express routes in `routes/products.js`,  
while `server.js` initializes the app, applies middleware, and connects the routes.  
This demonstrates how a basic **RESTful API** performs full **Create, Read, Update, and Delete (CRUD)** operations using Express.js.

---

## ⚙️ Technologies Used
- Node.js  
- Express.js  
- UUID  
- Nodemon  
- Postman

---


