"use client"
import { Progress } from "@/components/ui/progress"

export default function ProgressBar(
  {skilltxt,par ,value}: {skilltxt:string;par:string;value:any}
) {
  return (
    <div className="text-white  w-4/5 m-auto mt-8 flex flex-row items-center justify-between">
      <h3 className="w-1/4">{skilltxt}</h3>
        <div className="w-4/5  m-auto"><Progress value={value}  className="h-2.5 bg-indigo-600"/></div>
        <h3 className="w-1/12 text-end">{par}%</h3>
    </div>
  )
}
