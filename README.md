# 📚 PLP Bookstore – MongoDB Fundamentals Assignment

## Overview

This project demonstrates the fundamentals of MongoDB, including database setup, CRUD operations, advanced queries, aggregation pipelines, and indexing for performance optimization. The sample data models a bookstore with a collection of books.

## 📦 Project Structure

```
insert_books.js         # Script to populate MongoDB with sample book data
queries.js              # File containing all MongoDB queries and operations
README.md               # Project documentation (this file)
Week1-Assignment.md     # Assignment instructions and requirements
.github/
  classroom/
    autograding.yaml    # Autograding configuration
  workflows/
    classroom.yml       # (empty)
screenshot/
  Screenshot (2).png    # Screenshot of MongoDB Compass/Atlas with your data
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community) installed locally **OR** a free [MongoDB Atlas](https://www.mongodb.com/atlas/database) cluster
- `npm` package manager

### Setup Instructions

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd week-1-mongodb-fundamentals-assignment-vengefu
   ```

2. **Install dependencies**
   ```sh
   npm install mongodb
   ```

3. **Configure MongoDB Connection (Optional)**
   - By default, the script connects to `mongodb://localhost:27017`.
   - If using MongoDB Atlas, update the `uri` variable in [`insert_books.js`](insert_books.js) with your connection string.

4. **Insert Sample Data**
   ```sh
   node insert_books.js
   ```
   - This will populate the `plp_bookstore` database with sample book documents.

5. **Verify Data**
   - Use MongoDB Compass, Atlas, or `mongosh` to view the `books` collection.

## 📝 MongoDB Queries

All required queries and operations are in [`queries.js`](queries.js):

- **Basic CRUD Operations**
  - Find books by genre, author, or publication year
  - Update and delete books
- **Advanced Queries**
  - Filtering, projection, sorting, and pagination
- **Aggregation Pipelines**
  - Average price by genre, most prolific author, books by decade
- **Indexing**
  - Single and compound indexes, with performance analysis using `explain()`

> **To run these queries:**  
> Open a MongoDB shell (`mongosh`) and execute the commands from [`queries.js`](queries.js) line by line.

## 📸 Screenshot

See [`screenshot/Screenshot (2).png`](screenshot/Screenshot%20(2).png) for a sample view of the database in MongoDB Compass.

## 🛠️ Customization

- You can modify [`insert_books.js`](insert_books.js) to add more books or change the schema.
- Update queries in [`queries.js`](queries.js) as needed for further exploration.

## 🧪 Testing & Autograding

- The project includes an autograding setup in [`.github/classroom/autograding.yaml`](.github/classroom/autograding.yaml).
- Ensure all required files are present and your queries cover the assignment tasks for full credit.

## 📚 References

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)

---

**Author:** _Your Name_  
**Course:** PLP MongoDB Fundamentals  
**Assignment:** Week 1
