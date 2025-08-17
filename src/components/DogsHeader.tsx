"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "About", href: "/PetShop/about" },
  { name: "Dogs", href: "/PetShop/dogs" },
  { name: "Cats", href: "/PetShop/Cats" },
  { name: "Birds", href: "/PetShop/Birds" },
  { name: "FAQ", href: "/PetShop/FAQ" },
  { name: "Contact", href: "/PetShop/contact" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Precompute active states for all nav items
  const navWithActive = navigation.map((item) => ({
    ...item,
    isActive: pathname === item.href, // or use startsWith for partial matches
  }));

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50 bg-[#003B6D]">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/images/NewLogo.png" className="h-12 w-auto " />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <a
              href="/PetShop/home"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/PetShop/home") &&
                "underline underline-offset-4 scale-110 font-medium"
              }`}
            >
              Home
            </a>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/PetShop/about"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/PetShop/about") &&
                "underline underline-offset-4 scale-110 font-medium"
              }`}
            >
              About
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/PetShop/dogs"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/PetShop/dogs") &&
                "underline underline-offset-4 scale-110 font-medium"
              }`}
            >
              Dogs
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/PetShop/cats"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/PetShop/cats") &&
                "underline underline-offset-4 scale-110 font-semibold"
              }`}
            >
              Cats
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/PetShop/birds"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/PetShop/birds") &&
                "underline underline-offset-4 scale-110 font-medium"
              }`}
            >
              Birds
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/PetShop/FAQ"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/PetShop/FAQ") &&
                "underline underline-offset-4 scale-110 font-medium"
              }`}
            >
              FAQ
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/PetShop/contact"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/PetShop/contact") &&
                "underline underline-offset-4 scale-110 font-medium"
              }`}
            >
              Contact
            </a>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="text-sm/6 font-semibold text-white">
              <UserCircleIcon aria-hidden="true" className="size-9" />
            </div>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  <a
                    href="/PetShop/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 hover:text-black"
                  >
                    About
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>

        <form className="mx-auto mb-10 max-w-lg">
          <div className="flex">
            <label
              htmlFor="search-dropdown"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="z-20 block w-full rounded-lg border border-s-2 border-gray-300 border-s-gray-50 bg-gray-100 px-2 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
                placeholder="Search Dogs, Cats, Birds ..."
                required
              />
              <button
                type="submit"
                className="absolute end-0 top-0 h-full rounded-e-lg bg-[#6699CC] p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="h-3 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}
