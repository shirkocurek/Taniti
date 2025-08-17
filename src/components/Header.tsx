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
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/images/Newlogo.png" className="h-12 w-auto " />
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
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/PetShop/home"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/PetShop/home") &&
                "underline underline-offset-4 scale-110 font-medium"
              }`}
            >
              Home
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/about"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/about") &&
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
                  src="/images/veryNewlogo.png"
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
      </header>

      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt="taniti-view"
          src="/taniti/tahiti2.jpg"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className=""
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-65">
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-white">
                Discover Taniti Island
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-[#eff3f7] sm:text-xl/8">
                From white-sand beaches and lush rainforest to vibrant culture
                and adventure, your perfect island getaway starts here.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="text-md max-w-60 rounded-lg border border-[#4f89bb] bg-[#6699CC] px-3.5 py-2.5 font-medium text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Book Your Stay Now!
                </a>
                {/* <a href="#" className="text-md font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
