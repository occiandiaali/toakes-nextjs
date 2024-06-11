import Image from "next/image";
import {createClient} from '../lib/utils/supabase/server'

import { Button } from "@/components/ui/button";
//import { Skeleton } from "@/components/ui/skeleton";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getBase64ImageUrl } from "@/lib/utils/getBase64ImageUrl";

const generateRandomImgHeight = (max: number, min: number) => Math.trunc(Math.random()*(max-min)+min);

export default async function Home() {
    const supabase = createClient();
  const {data: posts} = await supabase.from('nuxtshadcnposts').select();

  const blurDataUrl = await getBase64ImageUrl('https://images.unsplash.com/photo-1530731141654-5993c3016c77');



  return (
    <div className="columns-2 md:columns-3 lg:columns-4 pt-4">
    {/* {!posts?.length ? (
      () => {
        for(let i = 1; i <= 10; i++) {
          return (
                <>
    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
     <div className="space-y-2">
       <Skeleton className="h-4 w-[250px]" />
       <Skeleton className="h-4 w-[200px]" />
      </div> 
      </>
          )
        }
      }
    ) : null} */}

    {posts?.map((post) => (
    <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 " key={post.id}>
    {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      
        <Image 
          src={post.poster}
          priority={true}
          placeholder={'blur'}
          blurDataURL={blurDataUrl}
          width={500}
          height={generateRandomImgHeight(250,190)}
          alt={post.title}
          className="w-full rounded-md m-1 md:h-80"
          />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <span className="absolute top-3 left-5 text-xs">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>
    3.5k
    </span>
    <span className="absolute top-5 right-2 text-xs">{post.duration} days left</span>
    <Drawer>
      <DrawerTrigger asChild>
      <div className="play-icon-div absolute top-20 left-16 md:left-32 md:cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="32px" viewBox="0 0 24 24" width="32px" fill="#e5a7a7"><g><rect fill="none" height="32" width="32"/></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M9.5,16.5l7-4.5l-7-4.5V16.5z"/></g></svg>
      </div>
      </DrawerTrigger>
      <DrawerContent>
      <div className="mx-auto w-full max-w-sm p-1">
      <DrawerHeader>
      <div className="flex flex-row p-1">
      <Avatar style={{marginRight: 12}}>
    <AvatarImage src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="@username" />
    <AvatarFallback>OD</AvatarFallback>
  </Avatar>
      <div>
         <DrawerTitle>{ post.title } - 
         <span className="text-sm">{
                 new Intl.NumberFormat('en-NG', {
          style: 'currency',
          currency: 'NGN'
        }).format(parseInt(post.price))
          }</span>
          </DrawerTitle>
          <DrawerDescription>{post.description}</DrawerDescription>
      </div>
      </div>
      </DrawerHeader>
      <div className="w-full h-80 p-1">
      <video src={post.video} controls 
      width="100%" height="300px" autoPlay
      />
      </div>
        <DrawerFooter>
          <Dialog>
          <DialogTrigger asChild>
          <Button className="z-30">Contact seller</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
          <DialogHeader>
          <DialogTitle>Send the seller a message</DialogTitle>
          </DialogHeader>
               <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Input
            id="link"
            defaultValue="Short message to the seller.."
            readOnly
          />
        </div>
        </div>
            <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
            <DialogTrigger asChild>
            <Button className="z-30">Send</Button>
            </DialogTrigger>
      </DialogFooter>
          </DialogContent>
          </Dialog>    
          
          <DrawerClose asChild>
            <Button variant="outline" className="z-30">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
      </DrawerContent>
      </Drawer>
          </div>
        <div>
         <h1 className="test__title text-sm font-bold mb-1">{ post.title }</h1>
         <p className="test__author font-sm text-xs font-light mb-1">{
         new Intl.NumberFormat('en-NG', {style: 'currency',currency: 'NGN'})
           .format(post.price)
          }</p>
          <p className="font-sm text-xs font-extralight">In: {post.category}</p>
       </div>
      
    </div>
    ))}
    </div>
  );
}
