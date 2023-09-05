"use client"

import SearchBar from "./SearchBar"

export default function SearchSection() {
   function submit(e) {
      e.preventDefault()
      console.log(e.target.search.value);
   }

   return (
      <div className="bg-gray-100 p-5">
         <SearchBar submit={submit} />
         {/* result */}
         <ul>

         </ul>
      </div>
   )
}
