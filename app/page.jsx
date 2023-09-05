import PostCard from "@/components/ui/PostCard";
import SearchBar from "@/components/ui/SearchBar";
import SearchSection from "@/components/ui/SearchSection";
import Link from "next/link";


const getPosts = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!result.ok) throw ''
  const posts = await result.json()
  return posts
}

export default async function Home() {
  const allPosts = await getPosts()

  return (
    <>
      {/* hero */}
      <div className="text-center py-10 flex flex-col gap-4">
        <h1 className="font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam deleniti expedita magni aperiam quisquam?</h1>
        <p className="text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, reprehenderit rem dolorum ducimus atque consequatur fugit ex debitis tempore sapiente culpa, a, itaque possimus sed?</p>
        <Link
          className="bg-gray-800 self-center text-white py-2 px-6 rounded-lg"
          href='/about'>אודות</Link>
      </div>

      {/* <ul className="flex justify-center gap-6 flex-col md:flex-row flex-wrap">
        {allPosts
          .filter((p, i) => i < 3)
          .map(post =>
            <PostCard
              key={post.id}
              {...post}
            />
          )}
      </ul> */}

      <SearchSection />

    </>
  )
}
