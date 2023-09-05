import React from 'react'
import { BsSearchHeart } from 'react-icons/bs'

export default function SearchBar({ submit }) {
   return (
      <form onSubmit={submit} className='rounded-[40px] relative shadow text-gray-700 overflow-hidden bg-white w-96'>
         <input type='text' name='search' className='w-full h-16 focus:outline-none px-4' placeholder='search in title...' />
         <button type='submit' className='absolute h-12 w-12 top-2 left-2 bg-blue-300 rounded-full flex items-center justify-center text-lg text-white'>
            <BsSearchHeart />
         </button>
      </form>
   )
}
