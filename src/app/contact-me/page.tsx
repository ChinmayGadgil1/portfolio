'use client'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Navbar from '@/components/Navbar'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string(),
  email: z.string()
})


function Page() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  const onSubmit = () => {
        
  }

  return (
    <div className='overflow-x-hidden text-white'>
    <Navbar/>
    <div className='w-screen h-screen  flex justify-center   items-center bg-black text-white'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/5 p-4 border-[2px] border-[#ae2cff]  rounded-2xl text-2xl">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-3xl p-3'>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" className='text-2xl text-black' {...field} required />
                </FormControl>



                <FormMessage />
              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-3xl p-3'>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" className='text-2xl text-black' {...field} required />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-3xl p-3'>Contact Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter contact number" className='text-2xl text-black' {...field} required />
                </FormControl>


                <FormMessage />
              </FormItem>
            )}
            />
          <Button type="submit" className='text-[#c042ba] bg-[#000000] text-3xl border border-[#f130ff] rounded-2xl'>Submit</Button>
        </form>
      </Form>
    </div>
    </div>
  )
}

export default Page