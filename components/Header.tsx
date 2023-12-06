"use client"
import react, {useState} from 'react'
import Link from "next/link";
import Button from "./Button";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  const [active , setActive] = useState(false)
  const headen=()=>{
    let menu = document.querySelector('.menu-pages')
    if(active == false)
    {
      menu.style.display="block"
      setActive(true)
    }else if(active == true){
      menu.style.display = "none"
      setActive(false)
    }

  }
  return (
    <div className="w-full bg-indigo-950 text-neutral-50 justify-center flex">
       <div className="flex justify-between  py-4   w-4/5 max-sm:block">
      <div className="w-1/12 flex max-sm:items-center max-sm:justify-between  max-sm:w-full ">
      <Link href={'#home'}> <h2 className="w-full py-2  ">RIEAD</h2></Link>
      <IoMdMenu className=" menu-icon hidden max-sm:block " onClick={headen} />
      </div>
        <div className=" flex max-sm:flex-col max-sm:w-full justify-between w-4/5 max-sm:hidden menu-pages">
        <ul className="flex gap-5 w-3/4  justify-between text-center py-2 max-sm:flex-col max-sm:m-auto" >
            <li><Link href={'#home'}>HOME</Link></li>
            <li><Link href={'#about'}>ABOUT ME</Link></li>
            <li><Link href={'#services'}>SERVICES</Link></li>
            <li><Link href={'#skills'}>SKILLS</Link></li>
            <li><Link href={'#portfolio'}>PORTFOLIO</Link></li>
            <li><Link href={'#contact'}>CONTACT</Link></li>
        </ul>
        <Button btntext="Hire me" bgColor="bg-white" btnborder="border-0" btncolor="" resm="" center="max-sm:m-auto"/>
        </div>
       </div>
    </div>
  )
}
