'use client'
import react,{useState} from 'react'
import Button from "./Button";
import { ContactSchema } from '@/validation/contactSchema';


export default function Form() {
const [inputdata , setInputData] =useState({
  text : '',
  email : '',
  number : '',
  subject : '',
  message : '',
})
const [errors , setErrors] = useState({
  text : '',
  email : '',
  number : '',
  subject : '',
  message : '',
})

const [storeinputData, setStoreinputData] = useState([]);

const handleSubmit = (e:any) =>{
  e.preventDefault();

const validationResult = ContactSchema.safeParse(inputdata)

  const allresult = [inputdata , ...storeinputData]
  setStoreinputData(allresult);
 if(validationResult.success){
  setInputData({
    text : '',
    email : '',
    number : '',
    subject : '',
    message : '',
  });
  setErrors({
    text : '',
    email : '',
    number : '',
    subject : '',
    message : '',
  });
 }else{
  setErrors({
    text: validationResult.error.errors.find((err) => err.path[0] === "text")?.message || "",
    email: validationResult.error.errors.find((err) => err.path[0] === "email")?.message || "",
    number: validationResult.error.errors.find((err) => err.path[0] === "number")?.message || "",
    subject: validationResult.error.errors.find((err) => err.path[0] === "subject")?.message || "",
    message: validationResult.error.errors.find((err) => err.path[0] === "message")?.message || "",
  })
 }
}

const handleChange = (e:any) =>{
const {name , value} = e.target
  setInputData({
...inputdata,
[name] : value
  })
}
  return (
    <form action="" className="flex flex-col gap-2 " onSubmit={handleSubmit}>
    <input type="text" name='text' value={inputdata.text} className="w-full bg-indigo-600 h-10 p-2 text-white rounded-2xl" placeholder="Full Name " onChange={handleChange} />
    {errors.text && <div className="text-red-500">{errors.text}</div>}
    <input type="email" name='email' value={inputdata.email} className="w-full bg-indigo-600 h-10 p-2 text-white rounded-2xl" placeholder="Email Address "  onChange={handleChange} />
    {errors.text && <div className="text-red-500">{errors.email}</div>}
    <div className="flex flex-row gap-2">
    <input type="number" name='number' value={inputdata.number} className=" bg-indigo-600 h-10 p-2 text-white rounded-2xl w-1/2" placeholder="Mobile Number "  onChange={handleChange} />
    {errors.text && <div className="text-red-500">{errors.number}</div>}
    <input type="text" name='subject' value={inputdata.subject} className=" bg-indigo-600 h-10 p-2 text-white rounded-2xl w-1/2" placeholder="Subject"  onChange={handleChange}/>
    {errors.text && <div className="text-red-500">{errors.subject}</div>}
    </div>
    <textarea name='message' value={inputdata.message} className="w-full bg-indigo-600 h-20 p-2 text-white rounded-2xl" placeholder="Your Message"  onChange={handleChange}> </textarea>
    {errors.text && <div className="text-red-500">{errors.message}</div>}
    <div className="m-auto">
    <Button btntext="Send" bgColor="bg-indigo-600" btnborder="border-0" btncolor="text-white" />
    </div>
    </form>
  )
}
