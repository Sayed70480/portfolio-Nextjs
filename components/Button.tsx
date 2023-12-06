"use client"
export default function Button(
  { bgColor, btntext ,btnborder,btncolor,resm,center }: {center:string; bgColor: string; btntext: string ; btnborder: string; btncolor: string ;resm:string}) 
  {
  return (
    <div className={`${bgColor} ${btnborder} ${center} text-black w-36 text-center py-2  rounded-3xl  cursor-pointer  ${resm}`}
    >
      <button className={`${btncolor} `}>{btntext}</button>
    </div>
  )
}
