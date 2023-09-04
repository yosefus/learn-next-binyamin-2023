import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {

   return (
      <div className="h-12 flex justify-between relative items-center px-6">
         <nav className="hidden md:flex gap-6">
            <Link href='/'> בית </Link>
            <Link href='/about'>  אודות</Link>
            <Link href='/create-post'> יצירת פוסט</Link>
         </nav>
         <MobileMenu />

         <img src="/next.svg" width={30} height={30} alt="" />
      </div>
   )
}
