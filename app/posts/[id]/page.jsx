
export default function Page({ params }) {
   console.log(params);
   return (
      <div>{params.id}</div>
   )
}
