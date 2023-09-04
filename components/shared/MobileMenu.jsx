"use client"

import Link from 'next/link'
import React, { useState } from 'react'

export default function MobileMenu() {
   const [isClose, setIsClose] = useState(false)

   return (
      <div className='block md:hidden '>
         <button onClick={() => setIsClose(prev => !prev)}>MobileMenu</button>
         <nav className={`
         ${isClose ? 'hidden' : 'absolute'} 
         left-0 right-0 top-12 bg-white z-10 flex flex-col gap-4 p-4 shadow`}>
            <Link href='/'> בית </Link>
            <Link href='/about'>  אודות</Link>
            <Link href='/create-post'> יצירת פוסט</Link>
         </nav>
      </div>
   )
}
