'use client'
import Link from "next/link";
import {ShoppingBag} from 'lucide-react';
import { useShoppingCart } from "use-shopping-cart";

import { Button } from "./ui/button";
import { dynamicLinks } from "./dynamicLinks";


export default function Navbar() {

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Next<span className="text-primary">Commerce</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {dynamicLinks("Home", "/")}
          {dynamicLinks("Men", "/Men")}
          {dynamicLinks("Women", "/Women")}
          {dynamicLinks("Teens", "/Teens")}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => useShoppingCart().handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}