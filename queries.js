//Task 2 //

// Find all books in the fantasy genre
db.books.find({genre: "Fantasy"});

// Find books published after a certain year
db.books.find({publishedYear: {$gt: 1980}});
//Find books by a specific author
db.books.find({author: "J.R.R. Tolkien"});
// Update the price of a specific book
db.books.updateOne(
  { title: "Dystopian" },
  { $set: { price: 11.99 } }
);
// Delete a book by title
db.books.deleteOne({ title: "The Alchemist" });

// Task 3 //
//Write a query to find books that are both in stock and published after 2010
db.books.find({
  inStock: true,
  publishedYear: { $gt: 2010 }
});

//Use projection to return only the title, author, and price fields in your queries
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
);

//Implement sorting to display books by price (both ascending and descending)
db.books.find({}).sort({ price: 1 }); // Ascending order
db.books.find({}).sort({ price: -1 }); // Descending order

//Use the `limit` and `skip` methods to implement pagination (5 books per page)
db.books.find({}).limit(5).skip(0); // First page

//*Task 4*//
//Create an aggregation pipeline to calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
  ]);

  //Create an aggregation pipeline to find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
]);

//Implement a pipeline that groups books by publication decade and counts them
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$publishedYear", 10] } },
      bookCount: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $multiply: ["$_id", 10] },
      bookCount: 1,
      _id: 0
    }
  },
  {
    $sort: { decade: 1 }
  }
]);

// Task 5//
//Create an index on the title field to improve query performance
db.books.createIndex({ title: 1 });

//Create a compound index on `author` and `published_year`
db.books.createIndex({ author: 1, publishedYear: 1 });

//Use the `explain()` method to demonstrate the performance improvement with your indexes
db.books.find({ title: "Dystopian" }).explain("executionStats");