import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'

const BookList = () => {
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])

  // Filters
  const [branch, setBranch] = useState('')
  const [author, setAuthor] = useState('')
  const [publisher, setPublisher] = useState('')
  const [publishedYear, setPublishedYear] = useState('')

  // Fetch all books on mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/book/all`)
        setBooks(res.data.books)
        setFilteredBooks(res.data.books)
      } catch (err) {
        console.error(err)
      }
    }

    fetchBooks()
  }, [])

  // Handle filtering
  useEffect(() => {
    let tempBooks = [...books]

    if (branch) tempBooks = tempBooks.filter(b => b.branch === branch)
    if (author) tempBooks = tempBooks.filter(b => b.author.toLowerCase().includes(author.toLowerCase()))
    if (publisher) tempBooks = tempBooks.filter(b => b.publisher.toLowerCase().includes(publisher.toLowerCase()))
    if (publishedYear) tempBooks = tempBooks.filter(b => b.publishedYear === publishedYear)

    setFilteredBooks(tempBooks)
  }, [branch, author, publisher, publishedYear, books])

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Library Books</h2>

      {/* Filters */}
      <div className='flex flex-wrap gap-4 mb-6'>
        <select onChange={(e) => setBranch(e.target.value)} value={branch} className='px-3 py-2 border'>
          <option value="">All Branches</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electronics">Electronics</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
          <option value="Electrical">Electrical</option>
        </select>

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='px-3 py-2 border'
        />

        <input
          type="text"
          placeholder="Publisher"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
          className='px-3 py-2 border'
        />

        <input
          type="number"
          placeholder="Published Year"
          value={publishedYear}
          onChange={(e) => setPublishedYear(e.target.value)}
          className='px-3 py-2 border'
        />
      </div>

      {/* Book List */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredBooks.map((book, idx) => (
          <div key={idx} className='border p-3 rounded shadow-sm bg-white'>
            <img src={book.imageUrl} alt={book.bookName} className='w-full h-40 object-cover mb-2 rounded' />
            <h3 className='text-lg font-semibold'>{book.bookName}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Publisher:</strong> {book.publisher}</p>
            <p><strong>Edition:</strong> {book.edition}</p>
            <p><strong>Year:</strong> {book.publishedYear}</p>
            <p><strong>Branch:</strong> {book.branch}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookList
