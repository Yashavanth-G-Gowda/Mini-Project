const Book = require('../models/Book');

// Add a new book
exports.addBook = async (req, res) => {
  try {
    const { title, author, publisher, rackLocation, available } = req.body;
    const newBook = new Book({ title, author, publisher, rackLocation, available });
    await newBook.save();
    res.status(201).json(newBook);  
  } catch (err) {
    res.status(500).json({ error: err.message });
  } 
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find(); // this must return an array
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
