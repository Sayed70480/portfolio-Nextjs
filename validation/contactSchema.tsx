import { z } from "zod";


export const ContactSchema = z.object({
    text :z.string().min(1,{message: 'Name is required' }).max(100),
    email :z.string().email({message: 'Email is required' }),
    number :z.string().min(1,{message: 'Number is required' }).max(12),
    subject :z.string().min(1,{message: 'Subject is required' }).max(12),
    message :z.string().min(1,{message: 'Message is required' }).max(100),
})