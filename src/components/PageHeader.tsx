"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
    isActive: pathname === item.href,
  }));

  return (
    <div className="bg-slate-900">
      <header className="absolute bg-slate-900 inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-2 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/taniti/Taniti-logo1.png"
                className="h-16 w-auto "
              />
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
              href="/"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/") &&
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
              href="/stays"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/stays") &&
                "underline underline-offset-4 scale-110 font-medium"
              }`}
            >
              Stays
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/dining"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/dining") &&
                "underline underline-offset-4 scale-110 font-semibold"
              }`}
            >
              Dining
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/attractions"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/attractions") &&
                "underline underline-offset-4 scale-110 font-medium"
              }`}
            >
              Attractions
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/transportation"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/transportation") &&
                "underline underline-offset-4 scale-110 font-medium"
              }`}
            >
              Transportation
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/contact"
              className={`px-4 text-sm/6 font-medium text-white hover:scale-110 hover:underline hover:underline-offset-4 ${
                pathname.includes("/contact") &&
                "underline underline-offset-4 scale-110 font-medium"
              }`}
            >
              Contact
            </a>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/booking"
              className="text-sm/6 font-semibold text-white"
            >
              <div className="border border-white/40 hover:scale-110 transition-transform ease-in-out duration-300 rounded px-4 py-2">
                Booking
              </div>
            </Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="logo"
                  src="/taniti/Taniti-logo1.png"
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
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 "
                  >
                    Home
                  </a>
                </div>
                <div className="space-y-2 py-6">
                  <a
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 "
                  >
                    About
                  </a>
                </div>
                <div className="space-y-2 py-6">
                  <a
                    href="/stays"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 "
                  >
                    Stays
                  </a>
                </div>
                <div className="space-y-2 py-6">
                  <a
                    href="/dining"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 "
                  >
                    Dining
                  </a>
                </div>
                <div className="space-y-2 py-6">
                  <a
                    href="/attractions"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 "
                  >
                    Attractions
                  </a>
                </div>
                <div className="space-y-2 py-6">
                  <a
                    href="/transportation"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 "
                  >
                    Transportation
                  </a>
                </div>
                <div className="space-y-2 py-6">
                  <a
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 "
                  >
                    Contact
                  </a>
                </div>
                <div className="space-y-2 py-6">
                  <a
                    href="/booking"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 "
                  >
                    Booking
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
