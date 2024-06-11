"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

import { BarChart4Icon, PenSquareIcon, HelpCircleIcon, Grid3X3Icon, LogOutIcon, Menu, MessageCircleIcon, Package2, Search, Settings2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
//import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function NavMenuSidebar() {
    const pathname = usePathname()

  return (
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {/* <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link> */}
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Ororo
          </Link>
          <Link
            href="/search"
            className={`link ${pathname === '/search' ? 'text-foreground' : 'text-muted-foreground'}  transition-colors hover:text-foreground`}
          >
            Search
          </Link>
          <Link
            href="/chats"
            className={`link ${pathname === '/chats' ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
          >
            Chats
          </Link>
          <Link
            href="/analytics"
            className={`link ${pathname === '/analytics' ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
          >
            Analytics
          </Link>
          <Link
            href="/settings"
            className={`link ${pathname === '/settings' ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
          >
            Settings
          </Link>

        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Ororo</span>
              </Link>
              <div className="flex flex-row">
                <div className="mt-0"><Grid3X3Icon /></div>
                <Link
                href="/"
                className={`link ${pathname === '/' ? 'text-foreground' : 'text-muted-foreground'} hover:bg-slate-400`}
              >
                <span className="pl-2 active">All</span>
              </Link>
              </div>

                <div className="flex flex-row">
                <div className="mt-0"><Search /></div>
                <Link
                href="/search"
                className={`link ${pathname === '/search' ? 'text-foreground' : 'text-muted-foreground'} hover:bg-slate-400`}
              >
                <span className="pl-2 active">Search</span>
              </Link>
              </div>


                <div className="flex flex-row">
                <div className="mt-0"><PenSquareIcon /></div>
                <Link
                href="/create-post"
                className={`link ${pathname === '/create-post' ? 'text-foreground' : 'text-muted-foreground'} hover:bg-slate-400`}
              >
                <span className="pl-2 active">New Post</span>
              </Link>
              </div>

                           <div className="flex flex-row">
                <div className="mt-0"><BarChart4Icon /></div>
                <Link
                href="/analytics"
                className={`link ${pathname === '/analytics' ? 'text-foreground' : 'text-muted-foreground'} hover:bg-slate-400`}
              >
                <span className="pl-2 active">Analytics</span>
              </Link>
              </div>

                           <div className="flex flex-row">
                <div className="mt-0"><MessageCircleIcon /></div>
                <Link
                href="/chats"
                className={`link ${pathname === '/chats' ? 'text-foreground' : 'text-muted-foreground'} hover:bg-slate-400`}
              >
                <span className="pl-2 active">Chats</span>
              </Link>
              </div>

                           <div className="flex flex-row">
                <div className="mt-0"><Settings2Icon /></div>
                <Link
                href="/settings"
                className={`link ${pathname === '/settings' ? 'text-foreground' : 'text-muted-foreground'} hover:bg-slate-400`}
              >
                <span className="pl-2 active">Settings</span>
              </Link>
              </div>

                           <div className="flex flex-row">
                <div className="mt-0"><HelpCircleIcon /></div>
                <Link
                href="/support"
                className={`link ${pathname === '/support' ? 'text-foreground' : 'text-muted-foreground'} hover:bg-slate-400`}
              >
                <span className="pl-2 active">Support</span>
              </Link>
              </div>

                           <div className="flex flex-row">
                <div className="mt-0"><LogOutIcon /></div>
                <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="pl-2 active">Log out</span>
              </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          {/* <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form> */}
          <div className="ml-auto flex-1 sm:flex-initial"/>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                {/* <CircleUser className="h-5 w-5" /> */}
                    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>OD</AvatarFallback>
    </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/profile">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>
               <Link href="/support">
              <DropdownMenuItem>Support</DropdownMenuItem>
              </Link>
              <Link href="/create-post">
              <DropdownMenuItem>New Post</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
  )
}