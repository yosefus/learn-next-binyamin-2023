"use client"

import { useState } from "react";
import SearchBar from "./SearchBar"
import PostCard from "./PostCard";
import { useRouter } from "next/navigation";

export default function SearchSection() {
   const [dataResult, setDataResult] = useState([])
   const router = useRouter()

   console.log(dataResult);

   async function submit(e) {
      e.preventDefault()
      const searchBy = e.target.search.value;
      try {
         router.push(`/search?searchby=${searchBy}`)

         // const result = await fetch('https://jsonplaceholder.typicode.com/posts')
         // if (!result.ok) throw ''
         // const posts = await result.json()
         // const filtered = posts.filter(post => post.title.includes(searchBy))
         // setDataResult(filtered)
      } catch (error) {

      }
   }

   return (
      <div className="bg-gray-100 p-5">
         <SearchBar submit={submit} />
         {/* result */}
         <ul className="flex justify-center gap-6 flex-col md:flex-row flex-wrap">
            {dataResult
               .map(post =>
                  <PostCard
                     key={post.id}
                     {...post}
                  />
               )}
         </ul>
      </div>
   )
}
