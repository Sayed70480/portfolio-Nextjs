import Section from "@/components/Section";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillCursorFill } from "react-icons/bs";
import Form from "@/components/Form";
import Button from "../Button";
export default function Contact() {
  return (
    <div className="bg-indigo-950  pt-14 pb-14 m-auto w-100  text-white" id="contact">
      <Section whitetxt="Contact" orangetext=""/>
      <div className="mt-14 w-4/5 m-auto   flex max-sm:flex-col max-sm:w-full  max-sm:px-4">
        <ul className=" w-2/4 flex flex-col gap-10 justify-center max-sm:w-full  max-sm:mb-4">
          <li className="flex   items-center max-sm:justify-center"><MdCall className="text-xl" /> <h2 className="ml-4 ">+8801863-931220</h2></li>
          <li className="flex items-center max-sm:justify-center"><MdEmail className="text-xl" /> <h2 className="ml-4 ">mdriead.bd@gmail.com</h2></li>
          <li className="flex  items-center max-sm:justify-center"><BsFillCursorFill className="text-xl" /> <h2 className="ml-4 ">Zirabo, Ashulia, Savar, Dhaka</h2></li>
        </ul>
        <div className=" w-1/2 max-sm:w-full ">
      <Form/>
     
      </div>
      </div>
      
    </div>
  )
}
