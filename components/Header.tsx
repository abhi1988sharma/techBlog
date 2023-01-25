import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
   <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
    <div className="flex items-center space-x-2">
        <Link href="/">
           <Image className="rounded-full"
                  src="/blog.jpeg" 
                  alt="logo"
                  width={50}
                  height={50} />
        </Link>
        <h1>Tech blog By Abhi.</h1>
    </div>
    <div>

        <Link href="https://abhi1988sharma.github.io/portfolio/"
        className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">
            Get to know me by clicking
        </Link>
    </div>
   </header>
  );
};
export default Header;
