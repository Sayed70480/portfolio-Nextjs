import Image from 'next/image'
export default function Images({imgurl}:{imgurl:string;}) {
  return (
   
     <Image
      src={imgurl}
      width={500}
      height={500}
      alt="Picture of the author"
      className=' w-1/4 rounded-sm cursor-pointer  hover:opacity-30 '
    />
   
  )
}
