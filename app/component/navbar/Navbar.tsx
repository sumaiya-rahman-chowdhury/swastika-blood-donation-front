"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, Search, X, CircleUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useUser } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import BloodDonorLogo from "../logo/BloodDonorLogo";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { user} = useUser();

 

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Login", href: "/" },
    { name: "About", href: "/" },
    { name: "Contact", href: "/" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full  bg-red-800 text-white">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and Desktop Nav */}
        <div className="flex items-center gap-10">
          <Link href="/" className="text-lg font-semibold">
            <BloodDonorLogo />
          </Link>

          <nav className="hidden items-center space-x-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search..." className="h-9 w-[200px] pl-9" />
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <Badge className="absolute -right-1 -top-1 h-5 w-5 justify-center rounded-full p-0">
              3
            </Badge>
          </Button>
          <div className="flex items-center">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="">
                    <Avatar className="h-12 w-12">
                      {" "}
                      {/* Make Avatar bigger first */}
                      <AvatarFallback className="scale-150">
                        {" "}
                        {/* Then scale its contents */}
                        <CircleUser className="h-8 w-8" />{" "}
                        {/* Explicit icon size */}
                      </AvatarFallback>
                    </Avatar>
                    {/* <span className="pr-2">
                      {user.name.split(" ")[0].toUpperCase()}
                    </span> */}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white mt-5">
                  <DropdownMenuItem>{user.name}</DropdownMenuItem>
                  <DropdownMenuItem>{user.email}</DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => router.push("/auth/profile")}
                  >
                    Profile
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => router.push("/")}
                className="bg-red-600 hover:bg-red-700"
              >
                Log In
              </Button>
            )}
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="User" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] sm:w-[400px] bg-red-700 pl-10 text-white"
          >
            <div className="flex flex-col gap-8 pt-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Menu</h3>
                <div className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="py-2 text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Account</h3>
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/avatars/01.png" alt="User" />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">
                      john@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
