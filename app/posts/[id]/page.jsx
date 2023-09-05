const getPostById = async (id) => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
   const post = await res.json()
   if (!post?.id) throw 'not found at all'
   return post
}

export const generateStaticParams = async () => {
   const result = await fetch('https://jsonplaceholder.typicode.com/posts')
   const posts = await result.json()
   return posts.map(post => ({ id: String(post.id) }))
}


export default async function Page({ params }) {
   const post = await getPostById(params.id)

   console.log(post);

   return (
      <div>
         <h1 className="text-4xl text-gray-800 my-14">{post.title}</h1>
         <p>{post.body}</p>
      </div>
   )
}
