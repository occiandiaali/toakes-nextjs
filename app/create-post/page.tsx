"use client";

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    title: z.string(),
    description: z.string(),
    price: z.string(),
    category: z.string(),
    video: z.string(),
    poster: z.string(),
    duration: z.string()
});

function onSubmit(values: z.infer<typeof formSchema>) {}

export default function CreatePost() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            description: '',
            price: '',
            category: '',
            video: '',
            poster: '',
            duration: ''
        }
    });

    return (
        <div className='w-full'>
          <h1 className='font-semibold text-2xl'>List a new item</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormDescription>
                This is the name of the item.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

                <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Briefly describe the item.."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can mention the item specs or other info
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="price" {...field} />
              </FormControl>
              <FormDescription>
                E.g. 245000
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Electronics</SelectLabel> */}
          <SelectItem value="electronics">Electronics</SelectItem>
          <SelectItem value="automobiles">Automobiles</SelectItem>
          <SelectItem value="men">Men Fashion</SelectItem>
          <SelectItem value="phones">Phones</SelectItem>
          <SelectItem value="household">Household</SelectItem>
          <SelectItem value="women">Women Fashion</SelectItem>
          <SelectItem value="real_estate">Real Estate</SelectItem>
          <SelectItem value="kids">Children Fashion</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectGroup>
        {/* <SelectGroup>
          <SelectLabel>Fashion</SelectLabel>
          <SelectItem value="men">Men Fashion</SelectItem>
          <SelectItem value="women">Women Fashion</SelectItem>
          <SelectItem value="kids">Children Fashion</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectGroup> */}
        </SelectContent>
        </Select>
        <Button type="submit">Publish</Button>
            </form>
          </Form>
        </div>
    )
}