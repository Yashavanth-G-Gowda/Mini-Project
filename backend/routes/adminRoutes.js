const express = require('express');
const router = express.Router();
const { addBook, getAllBooks, deleteBook } = require('../controllers/adminController.js');

router.post('/books', addBook);
router.get('/books', getAllBooks);
router.delete('/books/:id', deleteBook);

module.exports = router;
