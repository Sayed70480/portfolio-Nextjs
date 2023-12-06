"use client"
export default function Section({whitetxt,orangetext} : {whitetxt:string;orangetext:string}) {
  return (
    <div>
        <h2 className="flex justify-center text-white font-bold text-2xl ">
          {whitetxt}<span className="ml-2 text-red-500">{orangetext}</span>
        </h2>
        <hr className="text-white  mt-2 w-36 m-auto" />
      </div>
  )
}
