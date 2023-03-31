import Image from "next/image"
import Link from "next/link"
function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
        {/* left */}
        <div className="flex space-x-2 items-center">
        <Image src="https://links.papareact.com/4t3"alt="logo" height={30} width={30}/>
<div>
    <h1 className="font-bold">OFFICIALYASH
         <span className="text-violet-500">AI</span> Image Generator
    </h1>
    <h2>
        Powered by DALL.E 2, Chat GPT & Microsoft Azure 
    </h2>
</div>
        </div>
        {/* right */}
        <div className=" flex text-xs md:text-base divide-x items-center text-gray-500">
            <Link href="https://www.linkedin.com/in/yash-arora-b15b52108/" className="px-2 font-light text-right">
            Connect to My Linkdin
            </Link>

            <Link href="https://github.com/officialYash" className="px-2 font-light ">
            Github Repo
            </Link>
        </div>
    </header>
  )
}

export default Header