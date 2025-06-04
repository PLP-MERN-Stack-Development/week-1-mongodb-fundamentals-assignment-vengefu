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

