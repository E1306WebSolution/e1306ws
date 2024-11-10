import Link from "next/link";
import { Button } from "./ui/button";
// import { HamIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "./theme-btn";

const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50  sticky top-0 border-b backdrop-blur">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-2xl font-bold">
          <Link href={"/"} className="text-lg font-bold">E1306 WEB SOLUTION</Link>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:font-bold ">
            Home
          </Link>
          <Link href="/about" className="hover:font-bold ">
            About
          </Link>
          <Link href="/blog" className="hover:font-bold ">
            Blogs
          </Link>
          <Link href="/seo" className="hover:font-bold ">
            SEO
          </Link>
          <Link href="/contact" className="hover:font-bold ">
            Contact
          </Link>

          <div className="flex items-center">
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              Sign Up
            </Button>
            <ModeToggle />
          </div>
        </div>
        {/* removed from here div*/}
     
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            {/* <button className="text-white">Menu</button> */}
          </SheetTrigger>
          <span className="mx-2">
          <ModeToggle />
          </span>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="font-bold my-4">
                E1306 Web Solution
              </SheetTitle>
              <SheetDescription>
                <div className="flex flex-col gap-8">
                  <Link href="/" className="">
                    Home
                  </Link>
                  <Link href="/about" className="">
                    About
                  </Link>
                  <Link href="/seo" className="">
                    SEO
                  </Link>
                  <Link href="/contact" className="">
                    Contact
                  </Link>

                  <div>
                    <Button className="mx-1 text-xs" variant="outline">
                      Login
                    </Button>
                    <Button className="mx-1 text-xs" variant="outline">
                      Signup
                    </Button>
                    
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      {/* Added Here */}
      </div>

    </nav>
  );
};

export default Navbar;
