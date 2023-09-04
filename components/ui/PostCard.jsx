import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PostCard({ title, id, body }) {
   return (
      <Link href={`/posts/${id}`}>
         <li>
            <Image
               src='/img.jpg'
               width={400}
               height={300}
               className='h-52 object-cover'
            />
            <h2>{title}</h2>
         </li>
      </Link>
   )
}
