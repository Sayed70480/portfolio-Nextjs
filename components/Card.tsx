"use client"
export default function Card({Icons,txt,para}:{Icons:string; txt:string ; para:string}) {
  return (
    <div className='text-white h-80 w-1/2  bg-white rounded-xl flex flex-col gap-y-3 p-4 justify-center items-center max-sm:w-full'>
      <h2 className="text-red-400 text-4xl "> {Icons}</h2>
     <h3 className="text-slate-900 font-bold">{txt}</h3>
     <p className="text-slate-900 text-center">{para}</p>
      </div>
  )
}
