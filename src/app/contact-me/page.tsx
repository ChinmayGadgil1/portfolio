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
import axios from 'axios'
import { Description } from '@radix-ui/react-toast'
import { toast } from '@/components/ui/use-toast'
import { useState } from 'react'
import DotGrid from '@/DotGrid/DotGrid'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string(),
  email: z.string(),
  message: z.string()
})


function Page() {

  const [loading, setLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message:""
    },
  })

  const onSubmit =async (data: z.infer<typeof formSchema>) => {
    setLoading(true)
    try {
      const response=await axios.post("/api/contact-me",data);
        if (response.data.success) {
          toast({
            title:"Success",
            description:"Message sent succesfully"
          })
        }
        else{
          toast({
            title:"Failure",
            description:"Failed to send message",
            variant: 'destructive'
          })
        }
      } catch (error) {
        
        toast({
          title:"Failure",
          description:"Failed to send message",
          variant: 'destructive'
        })
      }
      finally{
        setLoading(false)
        form.reset()
      }
  }

  return (
    <div className='overflow-x-hidden text-white '>
      <div className='mt-32'></div>
    <div className="text-center ">
      <h1 className="text-6xl font-bold text-white ">Contact Me</h1>
    </div>
    <div className='w-screen h-screen  flex justify-center     text-white'>

      <div className="fixed inset-0 -z-10">
              <DotGrid
                dotSize={8}
                gap={32}
                baseColor="#271E37"
                activeColor="#5227FF"
                proximity={120}
                shockRadius={150}
                shockStrength={1}
                resistance={750}
                returnDuration={1}
              />
            </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 min-w-[40%]  p-4 border-[2px] border-[#ae2cff]  rounded-2xl text-2xl">
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
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-3xl p-3'>Message</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your message" className='text-2xl text-black' {...field} required />
                </FormControl>


                <FormMessage />
              </FormItem>
            )}
            />
          <Button type="submit" className='text-[#c042ba] bg-[#000000] text-3xl border border-[#f130ff] rounded-2xl' disabled={loading}>Submit</Button>
        </form>
      </Form>
    </div>
    </div>
  )
}

export default Page