import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PostCard({ title, id, body }) {
   return (
      <Link href={`/posts/${id}`}>
         <li className='w-full md:w-72 lg:w-96'>
            <div className='relative w-full h-96 rounded-xl overflow-hidden'>
               <Image
                  fill
                  src='/img.jpg'
                  className='object-cover'
               />
            </div>
            <h2>{title}</h2>
         </li>
      </Link>
   )
}
