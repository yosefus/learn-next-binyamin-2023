"use client"
import Link from "next/link";

export default function Error({ reset, error }) {

   return (
      <div>
         {error.message || error}
         <button onClick={() => reset()}>
            reset page
         </button>
         <Link href={'/'}>go back to home</Link>
      </div>
   )
}
