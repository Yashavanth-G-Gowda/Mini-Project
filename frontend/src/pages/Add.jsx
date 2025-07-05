import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {

  const [image, setImage] = useState(false)
  const [bookName, setBookName] = useState('')
  const [author, setAuthor] = useState('')
  const [publisher, setPublisher] = useState('')
  const [edition, setEdition] = useState('')
  const [publishedYear, setPublishedYear] = useState('')
  const [branch, setBranch] = useState('Computer Science')

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()

      formData.append("bookName", bookName)
      formData.append("author", author)
      formData.append("publisher", publisher)
      formData.append("edition", edition)
      formData.append("publishedYear", publishedYear)
      formData.append("branch", branch)
      image && formData.append("image", image)

      const response = await axios.post(backendUrl + '/api/book/add', formData, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        setBookName('')
        setAuthor('')
        setPublisher('')
        setEdition('')
        setPublishedYear('')
        setBranch('Computer Science')
        setImage(false)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>

      <div>
        <p className='mb-2'>Upload Book Image</p>
        <div className='flex gap-2'>
          <label htmlFor="image">
            <img className='w-20 h-28 object-cover' src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Book Name</p>
        <input onChange={(e) => setBookName(e.target.value)} value={bookName} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Enter Book Name' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Author Name</p>
        <input onChange={(e) => setAuthor(e.target.value)} value={author} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Enter Author Name' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Publisher</p>
        <input onChange={(e) => setPublisher(e.target.value)} value={publisher} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Enter Publisher' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Edition</p>
        <input onChange={(e) => setEdition(e.target.value)} value={edition} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Enter Edition' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Published Year</p>
        <input onChange={(e) => setPublishedYear(e.target.value)} value={publishedYear} className='w-full max-w-[500px] px-3 py-2' type="number" placeholder='Enter Published Year' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Branch</p>
        <select onChange={(e) => setBranch(e.target.value)} value={branch} className='w-full max-w-[500px] px-3 py-2'>
          <option value="Computer Science">Computer Science</option>
          <option value="Electronics">Electronics</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
          <option value="Electrical">Electrical</option>
        </select>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
    </form>
  )
}

export default Add
