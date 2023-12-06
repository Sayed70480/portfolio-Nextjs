import Button from "@/components/Button";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Image from "next/image";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <>
    <div className="flex h-screen m-auto w-4/5   max-sm:h-4/5 " id="home">
      <div className="m-auto w-4/5 max-sm:w-full max-sm:py-10 max-sm:text-center">
       
          <h4 className="text-red-500 font-semibold">Hi, it's me</h4>
          <h2 className="font-extrabold text-2xl text-gray-50">MD RIEAD MIA</h2>
          <h5 className="text-xl text-gray-50 font-semibold">
            And I'm a <span className="text-red-500"> Frontend Developer</span>
          </h5>
          <p className="text-base text-gray-50 font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br /> Nostrum quia neque ipsam numquam
          </p>
          <ul className=" flex flex-row text-gray-50 mt-3 mb-3 w-1/4 justify-between text-xl max-sm:w-6/12 max-sm:m-auto max-sm:my-4 ">
            <li>
              <a href="#">
                <CiFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <CiLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="#">
                <IoLogoInstagram />
              </a>
            </li>
          </ul>
          <Button bgColor='bg-orange-600' btntext='Download CV' btnborder="border-0" btncolor="" resm="max-sm:m-auto"/>     
      </div>
      <div className="w-1/2  flex justify-end max-sm:hidden  ">
      <div className="flex flex-col justify-center ">
      <Image src="/Images/side.png" alt="Side Image" width={500} height={800}  />
      </div>
      </div>
    </div>
      <About/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </>
  );
}
