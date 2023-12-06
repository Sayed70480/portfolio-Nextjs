import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Section from "@/components/Section";
export default function About() {
  return (
    <div className="bg-indigo-950  pt-14 pb-14 m-auto w-100" id="about">
      <Section whitetxt="About" orangetext="Me"/>
      <div className="m-auto w-4/5 mt-12 flex justify-between max-sm:flex-col  ">
        <div className="w-1/2 flex max-sm:w-full  ">
        <Image
          src="/Images/user.JPG"
          alt="user  Image"
          width={500}
          height={500}
          className="rounded-xl w-3/5 h-5/6 max-w-screen-lg max-sm:w-full"
        />
        </div>
        <div className="text-white  w-2/4  max-sm:w-full max-sm:text-center max-sm:mt-4">
        <h1 className="text-2xl font-bold">Frontend Developer & <br/> Graphic Designer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis, quas voluptatum facere quam iusto itaque sapiente dolor provident aspernatur unde, suscipit illum, velit similique animi iste corporis repellendus veritatis minus voluptas. Sunt, eligendi. Praesentium explicabo facere quo ad earum.</p>
        <p className="mt-6 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis, quas voluptatum facere quam iusto itaque sapiente dolor provident.</p>
        <Button btntext="Read More..." bgColor="bg-white" btnborder="border-0" btncolor="" resm="max-sm:m-auto"/>
      </div>
      
      </div>
      
    </div>
  );
}
