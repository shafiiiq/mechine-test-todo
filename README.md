# **Project Name: TODO App**

This project contains both the **backend** and **frontend** for the TODO App. The backend is built using **Node.js**, **Express.js**, and **PostgreSQL**, while the frontend is built using **React.js**.

---

## **Requirements**

Before running the project, ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (Node package manager)
- **PostgreSQL** (for the database)
- **React** (for frontend)

You can download and install these dependencies from their official websites:
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [React](https://reactjs.org/)

Additionally, if you don’t have **PostgreSQL** installed locally, you can set it up using a Docker container or any other method you prefer.

---

## **Project Setup**

### **1. Clone the Repository**

Clone the repository to your local machine using Git:

```bash
git clone <repository-url>
```

### **2. Navigate to Project Directory**

Go into the project directory:

```bash
cd todo-backend
```

### **3. Install Backend Dependencies**

Run the following command to install all the required dependencies for the backend:

```bash
npm install
```

---

## **Configuration**

1. Create a `.env` file in the root directory of the project.
2. Add the necessary environment variables for your PostgreSQL connection, such as:

```
DB_USER=your-db-username
DB_HOST=localhost
DB_NAME=todoapp
DB_PASSWORD=your-db-password
DB_PORT=5432
```

Make sure to replace the placeholders with your actual PostgreSQL database details.

---

## **Running the Application**

### **1. Start the Backend Server**

After installing dependencies and setting up the environment, you can start the server with:

```bash
npm start
```

By default, the backend server will run on `http://localhost:5000`.

### **2. Navigate to the Frontend Directory**

Open a new terminal window or tab, and navigate to the `todo-frontend` directory:

```bash
cd ../todo-frontend
```

### **3. Install Frontend Dependencies**

Run the following command to install all the required dependencies for the frontend:

```bash
npm install
```

### **4. Start the Frontend React App**

To run the frontend, use:

```bash
npm start
```

By default, the React frontend will run on `http://localhost:3000`.

---

## **Endpoints Description**

### **1. /api/users-last-30-days**
- **Method**: GET
- **Description**: Returns users who have made purchases in the last 30 days.
- **Response**:
  ```json
  [
    {
      "userid": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  ]
  ```

### **2. /api/top-products**
- **Method**: GET
- **Description**: Returns the top 3 most purchased products.
- **Response**:
  ```json
  [
    {
      "name": "Product A",
      "purchase_count": 150
    },
    {
      "name": "Product B",
      "purchase_count": 120
    },
    {
      "name": "Product C",
      "purchase_count": 110
    }
  ]
  ```

### **3. /api/revenue-per-category**
- **Method**: GET
- **Description**: Returns revenue per product category.
- **Response**:
  ```json
  [
    {
      "category": "Electronics",
      "total_revenue": 10000.00
    },
    {
      "category": "Clothing",
      "total_revenue": 5000.00
    }
  ]
  ```

### **4. /api/remaining-stock/:productId**
- **Method**: GET
- **Description**: Returns the remaining stock of a product given its ID.
- **Response**:
  ```json
  {
    "remaining_stock": 50
  }
  ```

---

## **Project Structure**

The project is organized as follows:

```
/todo-backend
  ├── /node_modules        # Backend dependencies
  ├── db.js                # Database connection and queries
  ├── .env                 # Environment variables (ignore this file in Git)
  ├── .gitignore           # Git ignore file
  ├── server.js            # Main server file
  ├── package.json         # Project metadata and backend dependencies
  └── README.md            # Project documentation

/todo-frontend
  ├── /node_modules        # Frontend dependencies
  ├── /public              # Public files (index.html, etc.)
  ├── /src                 # React components and app logic
  ├── package.json         # Project metadata and frontend dependencies
  └── README.md            # Frontend-specific documentation
```

---

## **Notes**

- Make sure your PostgreSQL database is up and running before starting the app.
- If you’re testing locally, you may need to adjust the connection settings in your `.env` file for your local PostgreSQL instance.

---

## **Contribution**

Feel free to fork the repository and submit a pull request if you'd like to contribute. Ensure that your contributions are well-documented and tested.
